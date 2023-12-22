import { FC } from 'react';

import { useInitialStateProvider } from '@providers';

import Typography from '@components/typography';
import CustomLink from '@components/custom-link/custom-link';

import { useI18nContext } from '@i18n';

import { ROUTES } from '@utils';

import styles from './copyrights.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

export const Copyrights: FC = () => {
  const {
    general: { companyName },
  } = useInitialStateProvider();
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <Typography.Text size="12">
        &copy; {companyName} {CURRENT_YEAR}
      </Typography.Text>
      <CustomLink href={ROUTES.PRIVACY_POLICY()}>
        <Typography.Text size="12" className={styles.link}>
          {LL.MENU.PRIVACY_POLICY()}
        </Typography.Text>
      </CustomLink>
    </div>
  );
};
