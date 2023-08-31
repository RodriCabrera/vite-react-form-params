export const CounterButton = ({
  text,
  ...props
}: {
  text: string
  onClick: () => void
}) => (
  <button
    type="button"
    {...props}
    className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-200 text-white hover:bg-indigo-300"
  >
    {text}
  </button>
)
