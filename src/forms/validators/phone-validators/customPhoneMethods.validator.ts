import { validatePhoneNumberLength, CountryCode } from 'libphonenumber-js';
import * as yup from 'yup';

import type { ErrorMessageRecord } from '../../../../types/errors';

const EXCLUDE_CHARS_REGEXP = [/#/g, /\*/g];

const removeExcludedChars = (phoneNumber: string) => {
  EXCLUDE_CHARS_REGEXP.forEach(
    (letter) => (phoneNumber = phoneNumber.replace(letter, '')),
  );

  return phoneNumber;
};

const ValidationResult = {
  TooShort: 'TOO_SHORT',
  TooLong: 'TOO_LONG',
};

export const addMainPhoneMaxMethod = (prefixFieldName: string) =>
  yup.addMethod(
    yup.string,
    'mainPhoneMax',
    function (
      error: string | ErrorMessageRecord,
      maxPhoneNumberLength: number,
    ) {
      return this.test('main-phone-max', error, function (value) {
        const { path, createError, parent } = this;

        const prefix = parent[prefixFieldName];
        const phoneNumber = value || '';

        const countryCodeRegexp = prefix.match(/([A-Z]{2})/);
        const countryCode = (
          countryCodeRegexp !== null ? countryCodeRegexp[0] : undefined
        ) as CountryCode;
        const phoneWithoutExcludedChars =
          removeExcludedChars(phoneNumber) || '';
        const phoneLengthValidationResult = validatePhoneNumberLength(
          phoneWithoutExcludedChars,
          countryCode,
        );

        if (phoneLengthValidationResult === ValidationResult.TooShort) {
          return createError({
            path,
            message: 'WEB_generic.validation.phoneNumber.tooShort',
          });
        }

        if (phoneLengthValidationResult === ValidationResult.TooLong) {
          return createError({
            path,
            message: 'WEB_generic.validation.phoneNumber.tooLong',
          });
        }

        return phoneNumber.length > maxPhoneNumberLength
          ? createError({ path, message: error })
          : true;
      });
    },
  );
