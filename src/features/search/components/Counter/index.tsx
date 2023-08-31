import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { CounterButton } from './CounterButton'

interface CounterProps {
  label: string
  name: string
}

export const Counter = ({ label, name }: CounterProps) => {
  const { formState, setValue, watch } = useFormContext()
  const watchValue = watch(name)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (watchValue) {
      searchParams.set(name, watchValue.toString())
      setSearchParams(searchParams)
    }
  }, [watchValue, name, setSearchParams, searchParams])

  const error = formState.errors[name]?.message?.toString()

  const increase = () => {
    setValue(name, watchValue + 1)
  }

  const decrease = () => {
    if (watchValue <= 1) return
    setValue(name, watchValue - 1)
  }

  return (
    <div>
      <p>{label}</p>
      <div
        className={`flex w-fit gap-3 rounded-md border-2  px-3 py-2 ${
          error ? 'border-red-500' : 'border-gray-200'
        }`}
      >
        <CounterButton text="-" onClick={decrease} />
        <span className="min-w-[10px]">{watchValue}</span>
        <CounterButton text="+" onClick={increase} />
      </div>
      <span className="text-sm text-red-500">{error}</span>
    </div>
  )
}
