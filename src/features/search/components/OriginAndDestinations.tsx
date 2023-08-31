import { useFieldArray, useFormContext } from 'react-hook-form'

import closeIcon from 'public/close.svg'
import { City } from 'features/common/types'
import { DESTINATIONS, ORIGIN } from '../constants'
import { useOriginAndDestinationSearchParams } from '../hooks/useOriginAndDestinationSearchParams'
import { CitySelect } from './CitySelect'

export const OriginAndDestinations = () => {
  const { formState, watch } = useFormContext<{
    destinations: City[]
    origin: City
  }>()

  const {
    fields: destinationsFields,
    append,
    remove
  } = useFieldArray<{ destinations: City[] }>({
    name: DESTINATIONS
  })

  const watchOrigin = watch(ORIGIN)
  const watchDestinations = watch(DESTINATIONS)

  useOriginAndDestinationSearchParams({
    watchDestinations,
    watchOrigin,
    stringDestinationsFields: JSON.stringify(destinationsFields)
  })

  const originError = formState.errors.origin?.[0]?.message
  const destinationErrors = formState.errors.destinations

  return (
    <div className="flex flex-col gap-5">
      <CitySelect
        label="City of origin"
        name={ORIGIN}
        error={originError}
        defaultValue={watchOrigin}
      />
      {destinationsFields.map((field, index) => {
        return (
          <div key={field.id} className="flex items-end justify-center gap-2">
            <CitySelect
              label="City of destination"
              name={`${DESTINATIONS}.${index}`}
              error={destinationErrors?.[index]?.[0]?.message}
              defaultValue={watchDestinations[index].flat() as City}
            />

            <div className="flex h-full w-4 items-center justify-center pt-6">
              {destinationsFields.length > 1 && (
                <button onClick={() => remove(index)}>
                  <img className="pb-2" src={closeIcon} />
                </button>
              )}
            </div>
          </div>
        )
      })}
      <button
        className="cursor-pointer text-left text-indigo-300"
        onClick={() => append([['', 0, 0]])}
      >
        Add destination
      </button>
    </div>
  )
}
