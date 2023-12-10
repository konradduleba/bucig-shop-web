import { FC } from 'react';

import { Menu } from './menu/menu';
import { ExternalLinks, LanguageChanger } from '../shared';

import styles from './left-side-menu.module.scss';

export const LeftSideMenu: FC = () => {
  return (
    <aside className={styles.container}>
      <Menu />
      <ExternalLinks />
      <LanguageChanger />
    </aside>
  );
};
