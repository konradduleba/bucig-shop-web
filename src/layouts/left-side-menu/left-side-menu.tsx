import { FC } from 'react';

import { Menu } from './menu/menu';
import { ExternalLinks } from './external-links/external-links';
import { LanguageChanger } from './language-changer/language-changer';

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
