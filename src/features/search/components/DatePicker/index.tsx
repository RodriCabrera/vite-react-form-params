import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CustomHeader } from './CustomHeader'

interface DatePickerProps {
  name: string
}

export const DatePicker = ({ name }: DatePickerProps) => {
  const { formState, setValue, watch } = useFormContext()
  const [searchParams, setSearchParams] = useSearchParams()

  const watchDate = watch(name)
  useEffect(() => {
    if (watchDate) {
      searchParams.set(name, watchDate)
      setSearchParams(searchParams)
    }
  }, [watchDate])

  const handleDateSelect = (date: Date | null) => {
    setValue(name, date)
  }

  const error = formState.errors[name]?.message?.toString()

  return (
    <div>
      <p>Date</p>
      <ReactDatePicker
        renderCustomHeader={CustomHeader}
        selected={watchDate}
        onSelect={handleDateSelect}
        onChange={handleDateSelect}
        minDate={new Date()}
        customInput={
          <input
            className="h-[44px] w-[110px] rounded-md border-2 p-2"
            value={watchDate}
            onChange={(e) => handleDateSelect(new Date(e.target.value))}
          />
        }
      />
      <span className="text-sm text-red-200">{error}</span>
    </div>
  )
}
