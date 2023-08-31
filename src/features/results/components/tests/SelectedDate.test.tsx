import { render } from '@testing-library/react'

import { SelectedDate, SelectedDateProps } from '../SelectedDate'

const props: SelectedDateProps = {
  date: new Date('Fri Sep 15 2023 16:12:41 GMT-0300')
}

describe('SelectedDate', () => {
  test('Should render the selected date', () => {
    const { getByText } = render(<SelectedDate {...props} />)
    expect(getByText('Sep 15, 2023')).toBeInTheDocument()
  })
})
