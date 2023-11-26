import { FC } from 'react';

import Typography from '@components/typography';
import CustomLink from '@components/custom-link/custom-link';

import { APP_NAME } from '@constants';

import { useI18nContext } from '@i18n';

import { ROUTES } from '@utils';

import styles from './copyrights.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

export const Copyrights: FC = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <Typography.Text size="12">
        &copy; {APP_NAME} {CURRENT_YEAR}
      </Typography.Text>
      <CustomLink href={ROUTES.PRIVACY_POLICY()}>
        <Typography.Text size="12" className={styles.link}>
          {LL.MENU.PRIVACY_POLICY()}
        </Typography.Text>
      </CustomLink>
    </div>
  );
};
