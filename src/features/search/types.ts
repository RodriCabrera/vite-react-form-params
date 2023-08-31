import { City } from 'features/common/types'

export interface SearchFields {
  passengers: number
  date: Date
  destinations: City[]
  origin: City
}
