import * as yup from 'yup';
import { createEmailValidationSchema, passwordValidationSchema } from '@forms';
import { Credentials } from '@types';

export enum LoginFormFields {
  IDENTIFIER = 'identifier',
  PASSWORD = 'password',
}

const schema = yup.object({
  [LoginFormFields.IDENTIFIER]: yup.string().required(),
  [LoginFormFields.PASSWORD]: yup.string().required('Password is requied'),
});

export const loginFormValidationSchema = schema
  .concat(passwordValidationSchema)
  .concat(createEmailValidationSchema());

export type LoginFormValidation = typeof loginFormValidationSchema;
export type LoginFormValues = yup.InferType<LoginFormValidation>;

export const loginFormDefaultValues: Credentials = {
  [LoginFormFields.IDENTIFIER]: '',
  [LoginFormFields.PASSWORD]: '',
};
