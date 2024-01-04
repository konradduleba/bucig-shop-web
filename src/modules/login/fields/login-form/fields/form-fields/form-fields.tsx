import { FC } from 'react';
import { FormInput } from '@forms';

import { LoginFormFields } from '../../login-form.validation';

export const FormFields: FC = () => {
  return (
    <>
      <FormInput
        name={LoginFormFields.EMAIL}
        label="Your email"
        variant="primary"
        autoFocus
      />
      <FormInput
        name={LoginFormFields.PASSWORD}
        label="Your password"
        variant="primary"
      />
    </>
  );
};
