import { object, array, string, tuple, number, date } from 'yup'

export const schema = object()
  .shape({
    origin: tuple([
      string().min(1, 'You must choose the city of origin').required(),
      number().required(),
      number().required()
    ]).required(),
    destinations: array().of(
      tuple([
        string().min(1, 'You must choose the city of destination').required(),
        number().required(),
        number().required()
      ]).required()
    ),
    passengers: number().required(),
    date: date().required()
  })
  .required()
