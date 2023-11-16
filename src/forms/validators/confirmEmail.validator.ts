import * as yup from 'yup';

export const createEmailConfirmationValidationSchema = () =>
  yup.object({
    emailConfirmation: yup
      .string()
      .required('WEB_generic.validation.emailConfirmation.required')
      .oneOf(
        [yup.ref('email')],
        'WEB_generic.validation.emailConfirmation.notTheSame',
      ),
  });
