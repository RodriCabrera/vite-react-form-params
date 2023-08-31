import { render } from '@testing-library/react'

import { Passengers } from '../Passengers'

describe('Passengers', () => {
  test('Should render the selected cities names', () => {
    const { getByText } = render(<Passengers passengers={4} />)
    const passengers = getByText('4')
    expect(passengers).toBeInTheDocument()
    expect(passengers).toHaveClass('text-indigo-400')
  })
})
