import { FC } from 'react';
import { FormInput, FormPasswordInput } from '@forms';

import { LoginFormFields } from '../../login-form.validation';

export const FormFields: FC = () => {
  return (
    <>
      <FormInput
        name={LoginFormFields.IDENTIFIER}
        label="Your email"
        type="email"
      />
      <FormPasswordInput
        name={LoginFormFields.PASSWORD}
        label="Your password"
      />
    </>
  );
};
