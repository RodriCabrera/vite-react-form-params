import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'

import circle from 'public/circle.svg'
import dots from 'public/horizontal-dots.svg'
import plus from 'public/plus.svg'
import ubication from 'public/ubication.svg'
import { DESTINATIONS } from '../constants'

export const UbicationIcons = () => {
  const { watch } = useFormContext()
  const destinations = watch(DESTINATIONS)
  return (
    <div className="flex w-4 flex-col items-center gap-2 pb-1 pt-12">
      <img src={circle} className="h-3" />
      {Array.from(Array(destinations?.length).keys()).map((i) => {
        const isLastDestination = i === destinations.length - 1
        return (
          <Fragment key={i}>
            <img src={dots} className="h-16" />
            {!isLastDestination ? (
              <img src={circle} className="h-3" />
            ) : (
              <img src={ubication} className="h-4" />
            )}
          </Fragment>
        )
      })}
      <img src={plus} className="mt-auto" />
    </div>
  )
}
