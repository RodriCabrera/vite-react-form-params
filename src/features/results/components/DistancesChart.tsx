import { PropsWithChildren } from 'react'

import tagIcon from 'public/tag.svg'
import circleDotsIcon from 'public/circle-dots.svg'
import ubicationIcon from 'public/ubication.svg'
import { City } from 'features/common/types'

const KmTag = ({ children }: PropsWithChildren) => (
  <div className="mr-2 flex items-center justify-center">
    <img src={tagIcon} className="fixed h-7 " />
    <span className="py-2 text-end text-indigo-400">{children}</span>
  </div>
)

export interface DistancesChartProps {
  destinations: City[]
  intermediateDistances: string[] | undefined
  origin: City
}

export const DistancesChart = ({
  destinations,
  intermediateDistances,
  origin
}: DistancesChartProps) => (
  <div className="flex flex-col items-end">
    <div className="flex items-center justify-end gap-4">
      <KmTag>
        {intermediateDistances && `${intermediateDistances?.[0]} km`}
      </KmTag>
      <img src={circleDotsIcon} />
      <p className="w-[200px]">{origin[0]}</p>
    </div>
    {destinations.map((destination, index) => {
      const cityName = destination[0]
      const isLastDestination = destinations.length === index + 1
      const intermediateDistance = intermediateDistances?.[index + 1]
      return (
        <div className="flex flex-col justify-end" key={cityName}>
          <div className="flex  flex-col">
            <div className="flex gap-4">
              {intermediateDistance && (
                <KmTag>{`${intermediateDistance} km`}</KmTag>
              )}
              {isLastDestination ? (
                <img src={ubicationIcon} />
              ) : (
                <img src={circleDotsIcon} />
              )}
              <p className="ml-auto w-[200px]">{cityName}</p>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)
