import React, { InputHTMLAttributes, ReactNode, useId } from 'react';
import { useController } from 'react-hook-form';

import { ErrorFieldWrapper, TextInput } from '../../components';

import styles from './form-input.module.scss';

export type InputProps = {
  name: string;
  label: string;
  type?: 'text' | 'number';
  disabled?: boolean;
  hint?: string | undefined;
  prefixText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isError?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  suffix?: string;
  maxLength?: number;
  autoComplete?: string;
  labelIcon?: ReactNode;
  displayCounter?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: React.FC<InputProps> = ({
  name,
  label,
  id,
  disabled,
  hint,
  prefixText,
  leftIcon,
  rightIcon,
  isError,
  isRequired,
  errorMessage,
  suffix,
  maxLength,
  autoComplete,
  labelIcon,
  displayCounter,
  onChange,
  onBlur,
  ...rest
}) => {
  const { field, fieldState } = useController({ name });

  const generatedId = useId();
  const inputId = id || generatedId;

  const errorText =
    errorMessage ?? (fieldState?.error?.message && fieldState.error.message);

  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.labelContainer}>
          <label htmlFor={inputId} className={styles.label}>
            {label + (isRequired ? '*' : '')}
            {labelIcon && labelIcon}
          </label>
          {!hint && displayCounter && maxLength ? (
            <span className={styles.helperText}>
              {/*TODO: add NumberLocale*/}
              {maxLength - (field.value?.length ?? 0)}
            </span>
          ) : null}
          {hint ? <span className={styles.helperText}>{hint}</span> : null}
        </div>
      )}
      <TextInput
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        error={!!fieldState?.error || isError}
        prefix={prefixText || ''}
        disabled={disabled}
        autoComplete={autoComplete}
        {...field}
        {...rest}
        id={inputId}
        isDirty={fieldState.isDirty}
        suffix={suffix}
        onChange={(e) => {
          field.onChange(e);
          onChange?.(e);
        }}
        onBlur={(e) => {
          field.onChange(e.target.value.trim());
          field.onBlur();
          onBlur?.(e);
        }}
      />
      {errorText && (
        <ErrorFieldWrapper
          selectorName={name}
          message={errorText}
          className={styles.error}
        />
      )}
    </div>
  );
};

export default FormInput;
