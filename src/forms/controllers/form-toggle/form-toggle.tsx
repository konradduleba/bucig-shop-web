import type { PropsWithChildren } from 'react';
import { useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { Toggle } from '../../components';

import styles from './form-toggle.module.scss';

export type FormToggleProps = PropsWithChildren<{
  name: string;
  disabled?: boolean;
  label?: string;
  id?: string;
}>;

export const FormToggle: React.FC<FormToggleProps> = ({
  name,
  disabled = false,
  label,
  children,
  id,
}) => {
  const { field } = useController({ name });
  const { trigger } = useFormContext();

  const onChange = useCallback(
    (checked: boolean) => {
      field.onChange(checked);
      trigger(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [field.onChange, trigger],
  );

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Toggle
        checked={!!field.value}
        onChangeValue={onChange}
        disabled={disabled}
        id={id}
        name={name}
      >
        {children}
      </Toggle>
    </div>
  );
};

export default FormToggle;
