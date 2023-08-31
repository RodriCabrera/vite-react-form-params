import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { useDefaultValues } from './useDefaultValues'
import { schema } from '../utils/searchFormValidationSchema'

export const useSearchForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const defaultValues = useDefaultValues()

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = () => navigate('/results' + location.search)

  return { methods, onSubmit }
}
