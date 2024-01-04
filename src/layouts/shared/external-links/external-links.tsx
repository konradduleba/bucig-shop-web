'use client';

import { FC } from 'react';

import IconHover from '@components/icon-hover/icon-hover';
import { IconButton } from '@components/buttons';

import { EXTERNAL_LINK_LIST, ExternalLinkList } from './external-links.consts';

import styles from './external-links.module.scss';

export const ExternalLinks: FC = () => {
  return (
    <div className={styles.container}>
      {EXTERNAL_LINK_LIST.map(
        ({ icon, id, onClick, label }: ExternalLinkList) => (
          <IconHover key={id} onClick={onClick}>
            <IconButton
              renderIcon={() => icon}
              className={styles.icon}
              aria-label={label}
            />
          </IconHover>
        ),
      )}
    </div>
  );
};
