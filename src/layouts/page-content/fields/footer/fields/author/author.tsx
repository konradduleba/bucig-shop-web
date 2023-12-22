import { FC } from 'react';

import Typography from '@components/typography';
import { AUTHOR } from '@constants';

import { useI18nContext } from '@i18n';

import styles from './author.module.scss';

export const Author: FC = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.container}>
      <Typography.Text size="12">{LL.CREDITS.AUTHOR()}</Typography.Text>
      <Typography.Text size="12">{AUTHOR}</Typography.Text>
    </div>
  );
};
