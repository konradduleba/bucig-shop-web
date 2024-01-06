import * as yup from 'yup';

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 64;

const specialCharacterRegex = /[@$!%*#?&()[\]{}|;:'"/?`<>,.~^=+_\\-]+/;
const numberRegex = /\d+/;
const letterRegex = /[a-zA-Z]+/;
const notStartingSpaceRegex = /^[^\s]/;
const notEndingSpaceRegex = /[^\s]$/;

export const passwordValidationSchema = yup.object({
  password: yup
    .string()
    .required('WEB_generic.validation.password.required')
    .min(MIN_PASSWORD_LENGTH, 'WEB_generic.validation.password.error')
    .max(MAX_PASSWORD_LENGTH, 'WEB_generic.validation.password.error')
    .matches(specialCharacterRegex, 'WEB_generic.validation.password.error')
    .matches(numberRegex, 'WEB_generic.validation.password.error')
    .matches(letterRegex, 'WEB_generic.validation.password.error')
    .matches(
      notStartingSpaceRegex,
      'WEB_generic.validation.password.startingSpaceError',
    )
    .matches(
      notEndingSpaceRegex,
      'WEB_generic.validation.password.endingSpaceError',
    ),
});

export const validatePassword = (
  password: string,
): Array<{ id: string; message: string; isValid: boolean }> => {
  return [
    {
      id: 'passwordValidation.minLength',
      message: 'WEB_generic.validation.password.minLength',
      isValid: password?.length >= MIN_PASSWORD_LENGTH,
    },
    {
      id: 'passwordValidation.maxLength',
      message: 'WEB_generic.validation.password.maxLength',
      isValid: password?.length <= MAX_PASSWORD_LENGTH,
    },
    {
      id: 'passwordValidation.letter',
      message: 'WEB_generic.validation.password.letter',
      isValid: letterRegex.test(password),
    },
    {
      id: 'passwordValidation.number',
      message: 'WEB_generic.validation.password.number',
      isValid: numberRegex.test(password),
    },
    {
      id: 'passwordValidation.specialCharacter',
      message: 'WEB_generic.validation.password.specialCharacter',
      isValid: specialCharacterRegex.test(password),
    },
  ];
};

export const passwordConfirmValidationSchema = yup.object({
  passwordConfirm: yup
    .string()
    .required('WEB_generic.validation.passwordConfirm.required')
    .oneOf(
      [yup.ref('password')],
      'WEB_generic.validation.passwordConfirm.different',
    ),
});
