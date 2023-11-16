import * as yup from 'yup';

export const createRequiredMaxLengthValidation = (max: number) =>
  yup
    .string()
    .required('WEB_generic.validation.fieldRequired')
    .max(max, {
      key: 'WEB_generic.validation.name.maxLength',
      data: {
        max: max,
      },
    });
