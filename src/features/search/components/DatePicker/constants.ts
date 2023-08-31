import { range } from 'lodash'
import { getYear } from 'date-fns'

export const YEARS = range(getYear(new Date()), getYear(new Date()) + 10, 1)
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
