import * as yup from 'yup';

import { MAX_LAST_NAME_LENGTH } from '../constants/validations.constants';

export const createLastNameValidationSchema = () =>
  yup.object({
    lastName: yup
      .string()
      .max(MAX_LAST_NAME_LENGTH, {
        key: 'WEB_generic.validation.lastName.maxLength',
        data: { max: MAX_LAST_NAME_LENGTH },
      })
      .required('WEB_generic.validation.lastName.required'),
  });
