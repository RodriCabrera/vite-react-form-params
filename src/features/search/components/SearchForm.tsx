import { FormProvider } from 'react-hook-form'

import { Button } from 'features/common/components/Button'
import { DatePicker } from 'features/search/components/DatePicker'
import { UbicationIcons } from 'features/search/components/UbicationIcons'
import { DATE, PASSENGERS } from 'features/search/constants'
import { useSearchForm } from 'features/search/hooks/useSearchForm'
import { Counter } from './Counter'
import { OriginAndDestinations } from './OriginAndDestinations'

export const SearchForm = () => {
  const { methods, onSubmit } = useSearchForm()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-12 px-12 md:px-24"
      >
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex gap-4 px-2 sm:justify-between sm:gap-6 md:gap-12">
            <UbicationIcons />
            <OriginAndDestinations />
          </div>

          <div className="flex flex-row-reverse justify-center gap-2 md:flex-col md:justify-start">
            <Counter name={PASSENGERS} label="Passengers" />
            <DatePicker name={DATE} />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}
