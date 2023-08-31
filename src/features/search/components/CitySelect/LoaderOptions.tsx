import { Combobox } from '@headlessui/react'

export const LoaderOptions = () => {
  return Array.from(Array(3).keys()).map((i) => (
    <Combobox.Option
      key={i}
      className="relative m-2 h-8 cursor-default select-none rounded-md bg-gray-200 p-2"
      value=""
    />
  ))
}
