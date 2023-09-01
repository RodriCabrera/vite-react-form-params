import { useLocation, useNavigate } from 'react-router-dom'

import { Card } from 'features/common/components/Card'
import { Button } from 'features/common/components/Button'
import { ResultsInfo } from 'features/results/components/ResultsInfo'

export const Results = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Card>
      <div className="flex min-h-[250px] w-full flex-col items-center justify-center gap-2 sm:min-w-[800px]">
        <ResultsInfo />
        <div className="mt-auto">
          <Button type="button" onClick={() => navigate('/' + location.search)}>
            Back
          </Button>
        </div>
      </div>
    </Card>
  )
}
