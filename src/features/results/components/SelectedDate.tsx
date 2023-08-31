export interface SelectedDateProps {
  date: Date
}

export const SelectedDate = ({ date }: SelectedDateProps) => {
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  return (
    <span className="font-bold text-indigo-400">{`${month} ${day}, ${year}`}</span>
  )
}
