import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { isEmpty } from 'lodash'

import { DESTINATIONS, ORIGIN } from '../constants'
import { City } from 'features/common/types'
import { getArrayDepth } from '../utils/getArrayDepth'

interface Params {
  watchDestinations: City[]
  watchOrigin: City
  stringDestinationsFields: string
}

export const useOriginAndDestinationSearchParams = ({
  watchDestinations,
  watchOrigin,
  stringDestinationsFields
}: Params) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const stringWatchDestinations = JSON.stringify(watchDestinations)
  const stringWatchOrigin = JSON.stringify(watchOrigin)

  useEffect(() => {
    watchDestinations.map((watchDestination) => {
      const watchCityName = watchDestination[0]

      if (watchCityName) {
        const destinationsParam = searchParams.getAll(DESTINATIONS)

        if (isEmpty(destinationsParam)) {
          searchParams.set(DESTINATIONS, JSON.stringify([watchDestination]))
        } else {
          destinationsParam.map((paramCity) => {
            const paramCityName: string = JSON.parse(paramCity)[0]
            const isNewCity = paramCityName !== watchCityName

            const citiesList: City[] = watchDestinations.filter(
              (wd) => wd[0] !== ''
            )
            if (isNewCity) {
              const isNested = getArrayDepth(citiesList) > 2
              searchParams.set(
                DESTINATIONS,
                JSON.stringify(isNested ? citiesList.flat(1) : citiesList)
              )
            }
          })
        }
      }
      setSearchParams(searchParams)
    })
  }, [
    stringDestinationsFields,
    watchDestinations,
    stringWatchDestinations,
    searchParams,
    setSearchParams
  ])

  useEffect(() => {
    if (!watchOrigin[0]) return
    searchParams.set(ORIGIN, JSON.stringify(watchOrigin))
    setSearchParams(searchParams)
  }, [
    watchOrigin,
    stringDestinationsFields,
    stringWatchOrigin,
    searchParams,
    setSearchParams
  ])
}
