import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { useController, useFormContext } from 'react-hook-form'

import xMarkIcon from 'public/xmark.svg'
import { useCities } from 'hooks/useCities'
import { City } from 'features/common/types'
import { LoaderOptions } from './LoaderOptions'

export interface CitySelectProps {
  label: string
  error?: string
  name: string
  defaultValue?: City | null
}

export const CitySelect = ({
  label,
  error,
  name,
  defaultValue
}: CitySelectProps) => {
  const [selected, setSelected] = useState<City>(['', 0, 0])
  const [query, setQuery] = useState('')

  const { cities, isLoading, error: cityError } = useCities({ query })
  console.log({ cityError })

  const hasResults = cities?.length !== 0

  const { control, setValue } = useFormContext()
  const { field } = useController({
    name,
    control,
    rules: { required: true }
  })

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue)
      setValue(name, defaultValue)
    }
  }, [])

  return (
    <div className="flex w-80 flex-col gap-2">
      <Combobox
        value={selected}
        onChange={(value) => {
          setSelected(value)
          field.onChange(value)
        }}
      >
        {({ open }) => (
          <>
            <Combobox.Label>{label}</Combobox.Label>
            <div className="relative">
              <div className="relative w-full focus:outline-none ">
                <Combobox.Input
                  className={`w-full rounded-md border-2 py-2 pl-3 pr-10 focus:outline-none ${
                    !!cityError || error
                      ? 'border-red-500 text-red-500'
                      : 'border-gray-300'
                  }`}
                  displayValue={(city: City) => city[0]}
                  onChange={(event) => setQuery(event.target.value.trim())}
                  autoComplete="off"
                />
                {open && (
                  <Combobox.Button
                    className="absolute inset-y-0 right-0 flex items-center pr-2"
                    onClick={() => {
                      setQuery('')
                    }}
                  >
                    <img src={xMarkIcon} />
                  </Combobox.Button>
                )}
              </div>
              {!cityError && (
                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  afterLeave={() => setQuery('')}
                >
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border-2 bg-white py-1 text-sm">
                    {isLoading && <LoaderOptions />}
                    {cityError && (
                      <div className="relative cursor-default select-none px-4 py-2 text-red-500">
                        An error has ocurred
                      </div>
                    )}
                    {!isLoading && !hasResults && !cityError && (
                      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        No cities were found
                      </div>
                    )}
                    {!isLoading &&
                      !cityError &&
                      cities?.map((city) => (
                        <Combobox.Option
                          key={city[0]}
                          className={({ active }) =>
                            `cursor-default select-none relative m-2 p-2 rounded-md  ${
                              active ? 'bg-indigo-200' : 'text-gray-900'
                            }`
                          }
                          value={city}
                        >
                          <span>{city[0]}</span>
                        </Combobox.Option>
                      ))}
                  </Combobox.Options>
                </Transition>
              )}
              <span className="text-sm text-red-500">
                {error ||
                  (cityError && 'Oops! Failed to search with this keyword. ')}
              </span>
            </div>
          </>
        )}
      </Combobox>
    </div>
  )
}
