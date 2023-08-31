import { render } from '@testing-library/react'

import { TotalDistance, TotalDistanceProps } from '../TotalDistance'

const props: TotalDistanceProps = {
  totalDistance: '550'
}

describe('TotalDistance', () => {
  test('Should render total styled distance', () => {
    const { getByText } = render(<TotalDistance {...props} />)
    const distance = getByText('550 km')
    expect(distance).toBeInTheDocument()
    expect(distance).toHaveClass('font-bold text-indigo-400')
    expect(getByText('is the total distance')).toBeInTheDocument()
  })
})
