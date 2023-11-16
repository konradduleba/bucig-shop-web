import { forwardRef, useState } from 'react';

import SvgEyeClosed from '@icons/eye-closed';
import SvgEye from '@icons/eye';

import { TextInputProps, TextInput } from '../../../components';
import { PasswordErrorType } from './types/Password.type';

import PasswordChecklist from './password-checklist/password-checklist';

import styles from './password-input.module.scss';

export type PasswordInputProps = TextInputProps & {
  password: string;
  validatePassword: (
    password: string,
  ) => Array<{ id: string; translationKey: string; isValid: boolean }>;
  showPasswordChecklist?: boolean;
};

enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

const INPUT_TYPE_TO_ICON_MAP = {
  [InputType.PASSWORD]: SvgEye,
  [InputType.TEXT]: SvgEyeClosed,
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
            passwordErrors={passwordErrors as PasswordErrorType}
            className={styles.passwordChecklist}
          />
        )}
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
