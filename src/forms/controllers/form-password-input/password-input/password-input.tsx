import { forwardRef, useState } from 'react';

import Eye from '@icons/eye';
import EyeClosed from '@icons/eye-closed';

import PasswordChecklist from './password-checklist/password-checklist';

import { TextInput, TextInputProps } from '../../../components';

import styles from './password-input.module.scss';

export type PasswordInputProps = TextInputProps & {
  password: string;
  validatePassword: (
    password: string,
  ) => Array<{ id: string; message: string; isValid: boolean }>;
  showPasswordChecklist?: boolean;
};

enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

const INPUT_TYPE_TO_ICON_MAP = {
  [InputType.PASSWORD]: Eye,
  [InputType.TEXT]: EyeClosed,
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      isDirty,
      validatePassword,
      password,
      showPasswordChecklist = false,
      ...restProps
    },
    ref,
  ) => {
    const [displayPasswordChecklist, setDisplayPasswordChecklist] =
      useState(false);

    const passwordErrors = validatePassword(password);

    const [inputType, setInputType] = useState(InputType.PASSWORD);

    const IconComponent = INPUT_TYPE_TO_ICON_MAP[inputType];

    return (
      <div className={styles.container}>
        <TextInput
          type={inputType}
          isDirty={isDirty || false}
          ref={ref}
          rightIcon={
            <IconComponent
              className={styles.icon}
              onClick={() =>
                setInputType((newInputType) =>
                  newInputType === InputType.PASSWORD
                    ? InputType.TEXT
                    : InputType.PASSWORD,
                )
              }
            />
          }
          {...restProps}
          onFocus={() => setDisplayPasswordChecklist(true)}
          onBlur={() => setDisplayPasswordChecklist(false)}
        />
        {showPasswordChecklist && displayPasswordChecklist && (
          <PasswordChecklist
            passwordErrors={passwordErrors}
            className={styles.passwordChecklist}
          />
        )}
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
