import React, { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => (
  <section className="z-10 rounded-md bg-white p-10 md:px-0">
    {children}
  </section>
)
