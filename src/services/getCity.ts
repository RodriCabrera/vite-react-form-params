import { mockCities } from './mockCities'

export const getCity = (filter: string): Promise<[string, number, number][]> =>
  new Promise((resolve, reject) => {
    if (filter.toLowerCase() === 'fail') {
      reject(new Error('Something went wrong'))
    }
    setTimeout(() => {
      resolve(
        mockCities.filter(([cityName]) => {
          const splittedCityName = cityName.toLowerCase().split('')
          const splittedFilter = filter
            .toLowerCase()
            .split('')
            .filter((char) => char !== ' ')
          return splittedFilter.every((char) => splittedCityName.includes(char))
        })
      )
    }, 600)
  })
