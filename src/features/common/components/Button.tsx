import React, { PropsWithChildren } from 'react'

interface ButtonProps {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export const Button = ({
  disabled,
  children,
  type,
  onClick
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`w-fit rounded-md border-2 border-gray-200 px-3 py-2 text-white shadow-sm ${
        disabled ? 'bg-gray-200' : 'bg-sky-950/80'
      }`}
    >
      {children}
    </button>
  )
}
