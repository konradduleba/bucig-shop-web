import type { PropsWithChildren } from 'react';
import { useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Checkbox, CheckboxSize, ErrorFieldWrapper } from '../../components';

import styles from './form-checkbox.module.scss';

export type FormCheckboxProps = PropsWithChildren<{
  name: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  size?: CheckboxSize;
  isIndeterminated?: boolean;
  onClick?: (checked: boolean) => void;
}>;

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  disabled = false,
  label,
  children,
  id,
  size,
  isIndeterminated,
  onClick,
}) => {
  const { field, fieldState } = useController({ name });
  const { trigger } = useFormContext();

  const onChange = useCallback(
    (checked: boolean) => {
      field.onChange(checked);
      trigger(name);
      onClick && onClick(checked);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.onChange, trigger],
  );

  const error = fieldState?.error?.message;

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Checkbox
        checked={!!field.value}
        onChangeValue={onChange}
        disabled={disabled}
        error={!!error}
        id={id}
        name={name}
        size={size}
        isIndeterminated={isIndeterminated}
      >
        {children}
      </Checkbox>
      {error && (
        <ErrorFieldWrapper
          selectorName={name}
          message={error}
          className={styles.error}
        />
      )}
    </div>
  );
};

export default FormCheckbox;
