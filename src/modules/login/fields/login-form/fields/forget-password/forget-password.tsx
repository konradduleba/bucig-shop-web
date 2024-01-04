import { FC } from 'react';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import { ROUTES } from '@utils';

import { useI18nContext } from '@i18n';

import styles from './forget-password.module.scss';

export const ForgetPassword: FC = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <CustomLink href={ROUTES.RECOVER_PASSWORD()}>
        <Typography.Text size="16" className={styles.link}>
          {LL.LOGIN.FORGET_PASSWORD()}
        </Typography.Text>
      </CustomLink>
      <CustomLink href={ROUTES.REGISTER()}>
        <Typography.Text size="16" className={styles.link}>
          {LL.LOGIN.REGISTER()}
        </Typography.Text>
      </CustomLink>
    </div>
  );
};
