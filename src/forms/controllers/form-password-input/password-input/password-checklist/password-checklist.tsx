import cn from 'classnames';

import Typography from '@components/typography';
import { useI18nContext } from '@i18n';

import CircleCheckIcon from '../icons/CircleCheck';
import type { PasswordErrorType } from '../types/Password.type';

import styles from './password-checklist.module.scss';

export interface PasswordChecklistProps {
  passwordErrors: PasswordErrorType[];
  className?: string;
}

export function PasswordChecklist({
  passwordErrors,
  className,
}: PasswordChecklistProps) {
  const { LL } = useI18nContext();

  return (
    <div className={cn(styles.container, className)}>
      <Typography.Text size="14" className={styles.hint}>
        {LL.VALIDATION.REQUIRED({ field: LL.LOGIN.PASSWORD() })}
      </Typography.Text>
      <ul className={styles.list}>
        {passwordErrors?.map(({ id, message, isValid }: PasswordErrorType) => (
          <li className={styles.listItem} key={id}>
            <CircleCheckIcon
              className={cn(styles.checkIcon, {
                [styles.checkIconSuccess]: isValid,
                [styles.checkIconInvalid]: !isValid,
              })}
            />
            <Typography.Text size="12">{message}</Typography.Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordChecklist;
