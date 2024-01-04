import * as yup from 'yup';

export enum LoginFormFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const loginFormValidationSchema = yup.object({
  [LoginFormFields.EMAIL]: yup.string(),
  [LoginFormFields.PASSWORD]: yup.string(),
});

export type LoginFormValidation = typeof loginFormValidationSchema;
export type LoginFormValues = yup.InferType<LoginFormValidation>;

export const loginFormDefaultValues: LoginFormValues = {
  [LoginFormFields.EMAIL]: '',
  [LoginFormFields.PASSWORD]: '',
};
