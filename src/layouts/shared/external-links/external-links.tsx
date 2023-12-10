'use client';

import { FC } from 'react';

import styles from './external-links.module.scss';
import IconHover from '@components/icon-hover/icon-hover';
import { EXTERNAL_LINK_LIST, ExternalLinkList } from './external-links.consts';
import IconButton from '@components/buttons/icon-button/icon-button';

export const ExternalLinks: FC = () => {
  return (
    <div className={styles.container}>
      {EXTERNAL_LINK_LIST.map(({ icon, id, onClick }: ExternalLinkList) => (
        <IconHover key={id} onClick={onClick}>
          <IconButton renderIcon={() => icon} className={styles.icon} />
        </IconHover>
      ))}
    </div>
  );
};
