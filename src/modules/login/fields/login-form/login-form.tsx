import { FC } from 'react';
import { signIn } from 'next-auth/react';
import { BaseForm, UseBaseFormReturnedParams, useBaseForm } from '@forms';

import { useErrorBoundaryProvider } from '@providers';

import {
  LoginFormValidation,
  LoginFormValues,
  loginFormDefaultValues,
  loginFormValidationSchema,
} from './login-form.validation';

import {
  ErrorMessage,
  ForgetPassword,
  FormFields,
  Header,
  SubmitButton,
} from './fields';

import styles from './login-form.module.scss';

export const LoginForm: FC = () => {
  const { error, onUpdateError } = useErrorBoundaryProvider();

  const formParams: UseBaseFormReturnedParams<LoginFormValidation> =
    useBaseForm({
      defaultValues: loginFormDefaultValues,
      validationSchema: loginFormValidationSchema,
    });

  const onSubmit = async (credentials: LoginFormValues) => {
    const response = await signIn('credentials', {
      ...credentials,
      redirect: false,
    });

    response && onUpdateError(response);
  };

  return (
    <BaseForm
      formParams={formParams}
      onSubmit={onSubmit}
      className={styles.form}
    >
      <Header />
      <FormFields />
      <ForgetPassword />
      {error && <ErrorMessage error={error} />}
      <SubmitButton />
    </BaseForm>
  );
};
