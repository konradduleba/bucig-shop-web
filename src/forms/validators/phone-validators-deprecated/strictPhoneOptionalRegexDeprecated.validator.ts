import * as yup from 'yup';

import {
  MAX_PHONE_NUMBER_LENGTH,
  PHONE_STRICT_OPTIONAL_REGEX,
} from '../../constants/validations.constants';

import { addMainPhoneMaxMethodDeprecated } from './customPhoneMethodsDeprecated.validator';

export const createPhoneNumberStrictOptionalValidationSchemaDeprecated = (
  fieldName = 'mobileNumber',
) => {
  addMainPhoneMaxMethodDeprecated();

  return yup.object({
    [fieldName]: yup
      .string()
      .matches(
        PHONE_STRICT_OPTIONAL_REGEX,
        'WEB_generic.validation.phoneNumber.invalidValueStrict',
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
      ),
  });
};
