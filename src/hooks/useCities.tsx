import { useEffect, useState } from 'react'

import { getCity } from 'services/getCity'
import { City } from 'features/common/types'

interface UseCitiesParams {
  query: string
}

export const useCities = ({ query }: UseCitiesParams) => {
  const [cities, setCities] = useState<City[]>([['', 0, 0]])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getCity(query)
      .then((data) => {
        setCities(data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [query])

  return { cities, isLoading, error }
}
