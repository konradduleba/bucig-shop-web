import type { HTMLAttributes } from 'react';
import { useController } from 'react-hook-form';

import { validatePassword } from '../../validators/password.validator';

import { PasswordInput } from './password-input/password-input';

import styles from '../form-input/form-input.module.scss';

export type FormPasswordInputProps = {
  name: string;
  label: string;
  disabled?: boolean;
  errorMessage?: string;
  isError?: boolean;
  showPasswordChecklist?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  name,
  id,
  label,
  disabled,
  errorMessage,
  isError,
  showPasswordChecklist,
  ...restProps
}) => {
  const { field, fieldState } = useController({ name });
  const error = errorMessage || fieldState?.error?.message;

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
      <PasswordInput
        disabled={disabled}
        isDirty={fieldState.isDirty}
        password={field.value}
        validatePassword={validatePassword}
        error={!!error || isError}
        showPasswordChecklist={showPasswordChecklist}
        {...field}
        {...restProps}
      />
    </div>
  );
};

export default FormPasswordInput;
