import { useEffect, useState } from 'react'

import { getDistance } from 'services/getDistance'
import { City } from 'features/common/types'

export const useDistances = ({
  origin,
  destinations
}: {
  origin: City
  destinations: City[]
}) => {
  const [totalDistance, setTotalDistance] = useState<string>()
  const [intermediateDistances, setIntermediateDistances] = useState<string[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    if (totalDistance) return
    if (!intermediateDistances) return
    const total = intermediateDistances.reduce(
      (acc, distance) => acc + Number(distance),
      0
    )
    const totalDistanceString = total.toFixed(2)
    setTotalDistance(totalDistanceString)
  }, [intermediateDistances, totalDistance])

  useEffect(() => {
    destinations.forEach((destination, index) => {
      const start = index === 0 ? origin : destinations[index - 1]
      setIsLoading(true)
      setError(null)
      getDistance({ cities: [start, destination] })
        .then((distance) => {
          const distanceInKms = (distance / 1000).toFixed(2)
          setIntermediateDistances((prev) => [...(prev || []), distanceInKms])
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false))
    })
  }, [])

  return { totalDistance, intermediateDistances, isLoading, error }
}
