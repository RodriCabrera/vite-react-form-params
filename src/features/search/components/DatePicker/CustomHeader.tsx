import { getMonth, getYear } from 'date-fns'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import arrowLeft from 'public/arrow-left.svg'
import arrowRight from 'public/arrow-right.svg'
import { MONTHS, YEARS } from './constants'

interface CustomHeaderProps {
  date: ReactDatePickerCustomHeaderProps['date']
  changeYear: ReactDatePickerCustomHeaderProps['changeYear']
  changeMonth: ReactDatePickerCustomHeaderProps['changeMonth']
  decreaseMonth: ReactDatePickerCustomHeaderProps['decreaseMonth']
  increaseMonth: ReactDatePickerCustomHeaderProps['increaseMonth']
  prevMonthButtonDisabled: ReactDatePickerCustomHeaderProps['prevMonthButtonDisabled']
  nextMonthButtonDisabled: ReactDatePickerCustomHeaderProps['nextMonthButtonDisabled']
}

export const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}: CustomHeaderProps) => {
  return (
    <div className="flex flex-row place-content-between px-4">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        type="button"
      >
        <img src={arrowLeft} />
      </button>

      <div>
        <select
          value={MONTHS[getMonth(date)]}
          onChange={({ target: { value } }) =>
            changeMonth(MONTHS.indexOf(value))
          }
        >
          {MONTHS.map((option) => (
            <option key={option} value={option}>
              {option.slice(0, 3).toUpperCase()}
            </option>
          ))}
        </select>

        <select
          value={getYear(date)}
          onChange={({ target: { value } }) => changeYear(parseInt(value))}
        >
          {YEARS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        type="button"
      >
        <img src={arrowRight} />
      </button>
    </div>
  )
}
