import { useSearchParams } from 'react-router-dom'
import { isEmpty } from 'lodash'

import { DATE, DESTINATIONS, ORIGIN, PASSENGERS } from '../constants'
import { City } from 'features/common/types'
import { SearchFields } from '../types'

export const useDefaultValues = (): SearchFields => {
  const [searchParams] = useSearchParams()

  const paramsDate = searchParams.get(DATE)
  const paramsOrigin = searchParams.get(ORIGIN)
  const paramsDestinations = searchParams.getAll(DESTINATIONS)

  const defaultPassengers = Number(searchParams.get(PASSENGERS)) || 1
  const defaultDate = () => (paramsDate ? new Date(paramsDate) : new Date())
  const defaultOrigin = (): City =>
    paramsOrigin ? JSON.parse(paramsOrigin) : ['', 0, 0]
  const getDefaultDestinations = (): City[] =>
    isEmpty(paramsDestinations)
      ? [['', 0, 0]]
      : JSON.parse(paramsDestinations[0])

  const defaultValues = {
    date: defaultDate(),
    destinations: getDefaultDestinations(),
    origin: defaultOrigin(),
    passengers: defaultPassengers
  }
  return defaultValues
}
