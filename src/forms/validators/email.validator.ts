import * as yup from 'yup';

import { MAX_EMAIL_LENGTH } from '../constants/validations.constants';

export const createEmailValidationSchema = () =>
  yup.object({
    identifier: yup
      .string()
      .email('WEB_generic.validation.email.invalid')
      .max(MAX_EMAIL_LENGTH, {
        key: 'WEB_generic.validation.email.maxLength',
        data: { max: MAX_EMAIL_LENGTH },
      })
      .required('WEB_generic.validation.email.required'),
  });
