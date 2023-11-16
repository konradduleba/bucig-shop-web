import * as yup from 'yup';

import {
  MAX_PHONE_NUMBER_LENGTH,
  PHONE_FREE_OPTIONAL_REGEX,
} from '../../constants/validations.constants';

import { addMainPhoneMaxMethodDeprecated } from './customPhoneMethodsDeprecated.validator';

export const createPhoneNumberFreeOptionalValidationSchemaDeprecated = (
  fieldName = 'mobileNumber',
  phoneNumberRegex = PHONE_FREE_OPTIONAL_REGEX,
) => {
  addMainPhoneMaxMethodDeprecated();

  return yup.object({
    [fieldName]: yup
      .string()
      .matches(
        phoneNumberRegex,
        'WEB_generic.validation.phoneNumber.invalidValueFree',
      )
      // @ts-expect-error I need disable checking.
      .mainPhoneMax(
        {
          key: 'WEB_generic.validation.phoneNumber.maxLength',
          data: {
            max: MAX_PHONE_NUMBER_LENGTH,
          },
        },
        MAX_PHONE_NUMBER_LENGTH,
      )
      .nullable(),
  });
};
