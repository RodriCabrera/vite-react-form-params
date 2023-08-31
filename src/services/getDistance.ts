import haversine from 'haversine-distance'

import { City } from 'features/common/types'

interface Point {
  lat: number
  lng: number
}

export const getDistance = ({ cities }: { cities: City[] }): Promise<number> =>
  new Promise((resolve, reject) => {
    if (cities.find((c) => c[0] === 'Dijon'))
      reject('There has been an error with Dijon in the distance calculation')
    setTimeout(() => {
      const [start, end] = cities
      const startCoords: Point = {
        lat: start[1],
        lng: start[2]
      }
      const endCoords: Point = {
        lat: end[1],
        lng: end[2]
      }
      const totalDistance = haversine(startCoords, endCoords)
      resolve(totalDistance)
    }, 600)
  })
