import * as yup from 'yup';

export const createNumberDecimalPlacesValidation = (decimalPlaces: number) =>
  yup
    .number()
    .transform((value) => (isNaN(Number(value)) ? undefined : value))
    .moreThan(0, {
      key: 'WEB_generic.validation.number.moreThanZero',
      data: { min: 0 },
    })
    .test(
      'max-fraction-digits',
      () => ({
        key:
          decimalPlaces === 0
            ? 'WEB_generic.validation.price.nodeDecimalPlaces'
            : 'WEB_generic.validation.price.maxDecimalPlaces',
        data: { value: decimalPlaces },
      }),
      (value) => {
        if (value !== undefined && !Number.isInteger(value)) {
          return new RegExp(`^\\d+(\\.\\d{0,${decimalPlaces}})?$`).test(
            value.toString(),
          );
        }
        return true;
      },
    )
    .required('WEB_generic.validation.fieldRequired');
