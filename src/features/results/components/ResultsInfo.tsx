import { SelectedDate } from 'features/results/components/SelectedDate'
import { useDistances } from 'features/results/hooks/useDistances'
import { useDefaultValues } from 'features/search/hooks/useDefaultValues'
import { Loader } from 'features/common/components/Loader'
import { DistancesChart } from 'features/results/components/DistancesChart'
import { TotalDistance } from 'features/results/components/TotalDistance'
import { Passengers } from 'features/results/components/Passengers'
import { Error } from 'features/common/components/Error'

export const ResultsInfo = () => {
  const { date, destinations, origin, passengers } = useDefaultValues()

  const { totalDistance, intermediateDistances, isLoading, error } =
    useDistances({
      origin,
      destinations
    })

  if (error) return <Error error={error} />
  if (isLoading) return <Loader className="pt-12" />

  return (
    <>
      <DistancesChart
        destinations={destinations}
        intermediateDistances={intermediateDistances}
        origin={origin}
      />
      <TotalDistance totalDistance={totalDistance} />
      <Passengers passengers={passengers} />
      <SelectedDate date={date} />
    </>
  )
}
