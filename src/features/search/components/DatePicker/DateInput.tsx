/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react'

interface InputProps {
  className: string
  value: string
  onChange: (value: string) => void
  onClick: () => void
}
const DateInput = (
  { className, value, onClick, onChange }: InputProps,
  ref: any
) => (
  <input
    className={className}
    type="text"
    value={value}
    ref={ref}
    onChange={(e) => onChange(e.target.value)}
    onClick={onClick}
  />
)

export default forwardRef(DateInput)
