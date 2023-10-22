import { FC } from 'react';

import styles from './left-side-menu.module.scss';
import { ExternalLinks } from './external-links/external-links';
import { LanguageChanger } from './language-changer/language-changer';
import { Menu } from './menu/menu';

export const LeftSideMenu: FC = () => {
  return (
    <aside className={styles.container}>
      <Menu />
      <ExternalLinks />
      <LanguageChanger />
    </aside>
  );
};