import { FC, PropsWithChildren } from 'react';
import Typography from '@components/typography';

import { TEXT_FONT_SIZE } from './content.consts';

import styles from './content.module.scss';

export const TextLine: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography.Text size={TEXT_FONT_SIZE} className={styles.info}>
      {children}
    </Typography.Text>
  );
};
