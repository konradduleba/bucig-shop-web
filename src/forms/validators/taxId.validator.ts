import * as yup from 'yup';

const EU_VAT_NUMBER_MAX_LENGTH = 12;
const NON_EU_VAT_NUMBER_MAX_LENGTH = 32;
const COUNTRY_CODE_OFFSET = 2;
const MIN_VAT_LENGTH = 1;

export const taxIdValidationSchema = yup.object({
  vatNumber: yup
    .mixed()
    .when(['countrySelectedOption.isEuMember'], (isEuMember: boolean) => {
      if (isEuMember) {
        return yup
          .string()
          .matches(
            /^[A-Z0-9]+$/,
            'WEB_register.process.companyVerification.validation.taxId.incorrect',
          )
          .min(
            COUNTRY_CODE_OFFSET + MIN_VAT_LENGTH,
            'WEB_register.process.companyVerification.validation.taxId.incorrect',
          )
          .max(EU_VAT_NUMBER_MAX_LENGTH + COUNTRY_CODE_OFFSET, {
            key: 'WEB_register.process.companyVerification.validation.taxId.maxLength',
            data: { max: EU_VAT_NUMBER_MAX_LENGTH },
          })
          .required(
            'WEB_register.process.companyVerification.validation.taxId.required',
          );
      } else {
        return yup
          .string()
          .min(
            COUNTRY_CODE_OFFSET + MIN_VAT_LENGTH,
            'WEB_register.process.companyVerification.validation.taxId.incorrect',
          )
          .max(NON_EU_VAT_NUMBER_MAX_LENGTH + COUNTRY_CODE_OFFSET, {
            key: 'WEB_register.process.companyVerification.validation.taxId.maxLength',
            data: { max: NON_EU_VAT_NUMBER_MAX_LENGTH },
          })
          .required(
            'WEB_register.process.companyVerification.validation.taxId.required',
          );
      }
    }),
});

export default taxIdValidationSchema;
