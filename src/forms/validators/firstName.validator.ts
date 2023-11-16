import * as yup from 'yup';

import { MAX_FIRST_NAME_LENGTH } from '../constants/validations.constants';

export const createFirstNameValidationSchema = () =>
  yup.object({
    firstName: yup
      .string()
      .max(MAX_FIRST_NAME_LENGTH, {
        key: 'WEB_generic.validation.firstName.maxLength',
        data: { max: MAX_FIRST_NAME_LENGTH },
      })
      .required('WEB_generic.validation.firstName.required'),
  });
