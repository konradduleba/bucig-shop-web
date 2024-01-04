import { FC } from 'react';
import { BaseForm, UseBaseFormReturnedParams, useBaseForm } from '@forms';
import {
  LoginFormValidation,
  LoginFormValues,
  loginFormDefaultValues,
  loginFormValidationSchema,
} from './login-form.validation';
import { ForgetPassword, FormFields, Header, SubmitButton } from './fields';

import styles from './login-form.module.scss';

export const LoginForm: FC = () => {
  const formParams: UseBaseFormReturnedParams<LoginFormValidation> =
    useBaseForm({
      defaultValues: loginFormDefaultValues,
      validationSchema: loginFormValidationSchema,
    });

  const onSubmit = (props: LoginFormValues) => {
    console.log(props);
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
      <SubmitButton />
    </BaseForm>
  );
};
