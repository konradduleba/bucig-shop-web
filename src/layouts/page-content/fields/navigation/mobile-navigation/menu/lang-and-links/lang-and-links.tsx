import { FC } from 'react';
import { ExternalLinks, LanguageChanger } from '../../../../../../shared';

import styles from './lang-and-links.module.scss';

export const LangAndLinks: FC = () => {
  return (
    <div className={styles.container}>
      <ExternalLinks />
      <LanguageChanger />
    </div>
  );
};
