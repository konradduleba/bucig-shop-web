import { FC } from 'react';

import Typography from '@components/typography';

import { useI18nContext } from '@i18n';

import styles from './header.module.scss';

export const Header: FC = () => {
  const { LL } = useI18nContext();

  return (
    <Typography.Heading size="30" option="secondary" className={styles.text}>
      {LL.LOGIN.TITLE()}
    </Typography.Heading>
  );
};
