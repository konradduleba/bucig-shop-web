import * as yup from 'yup';

export const PHONE_CONFIRMATION_CODE_LENGTH = 6;

export const verificationCodeValidationSchema = yup.object({
  verificationCode: yup
    .string()
    .required('WEB_generic.validation.phoneConfirmationCode.required')
    .test(
      'length',
      () => ({
        key: 'WEB_generic.validation.phoneConfirmationCode.length',
        data: { length: PHONE_CONFIRMATION_CODE_LENGTH },
      }),
      (value) => `${value}`.length === PHONE_CONFIRMATION_CODE_LENGTH,
    ),
});
