import { render } from '@testing-library/react'

import { DistancesChart, DistancesChartProps } from '../DistancesChart'

const props: DistancesChartProps = {
  origin: ['Paris', 48.856614, 2.352222],
  destinations: [
    ['Aix-en-Provence', 43.529742, 5.447427],
    ['Montpellier', 43.610769, 3.876716]
  ],
  intermediateDistances: ['639.01', '127.00']
}

describe('DistancesChart', () => {
  test('Should render the selected cities names', () => {
    const { getByText } = render(<DistancesChart {...props} />)
    expect(getByText('Paris')).toBeInTheDocument()
    expect(getByText('Aix-en-Provence')).toBeInTheDocument()
  })
  test('Should render the intermediate distance', () => {
    const { getByText } = render(<DistancesChart {...props} />)
    expect(getByText('639.01 km')).toBeInTheDocument()
    expect(getByText('127.00 km')).toBeInTheDocument()
  })
})
