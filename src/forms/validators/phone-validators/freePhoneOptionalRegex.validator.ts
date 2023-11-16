import * as yup from 'yup';

import {
  MAX_PHONE_NUMBER_LENGTH,
  PHONE_FREE_OPTIONAL_REGEX_WITHOUT_PREFIX,
} from '../../constants/validations.constants';

import { addMainPhoneMaxMethod } from './customPhoneMethods.validator';
import type { PhoneValidatorPropsType } from './validators.types';

export const createPhoneNumberFreeOptionalValidationSchema = ({
  inputFieldName = 'mobileNumber',
  prefixFieldName,
}: PhoneValidatorPropsType) => {
  addMainPhoneMaxMethod(prefixFieldName);

  return yup.object({
    [inputFieldName]: yup
      .string()
      .matches(
        PHONE_FREE_OPTIONAL_REGEX_WITHOUT_PREFIX,
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
