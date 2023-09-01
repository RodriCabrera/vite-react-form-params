import closeIcon from 'public/close.svg'

export const Error = ({ error }: { error: string }) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <img src={closeIcon} className="h-12 text-red-300" />
    <p className="text-center text-lg text-indigo-400">{error}</p>
  </div>
)
