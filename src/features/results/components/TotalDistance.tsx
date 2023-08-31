export interface TotalDistanceProps {
  totalDistance: string | undefined
}
export const TotalDistance = ({ totalDistance }: TotalDistanceProps) => (
  <div className="mt-4">
    <span className="font-bold text-indigo-400">{totalDistance} km</span> is the
    total distance
  </div>
)
