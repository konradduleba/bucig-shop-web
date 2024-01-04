import { FC } from 'react';

import { ActionButton } from '@components/buttons';

import { useI18nContext } from '@i18n';

import styles from './submit-button.module.scss';

export const SubmitButton: FC = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <ActionButton className={styles.button}>
        {LL.LOGIN.SUBMIT_BUTTON()}
      </ActionButton>
    </div>
  );
};
