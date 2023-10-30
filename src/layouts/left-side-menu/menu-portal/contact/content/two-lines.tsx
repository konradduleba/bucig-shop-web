import { FC } from 'react';

import { TextLine } from './text-line';

import styles from './content.module.scss';

export interface TwoLinesContentProps {
  icon: JSX.Element;
  firstContentTranslationKey: string; //@TODO Update after implementing i18n;
  secondContentTranslationKey: string; //@TODO Update after implementing i18n;
}

export const TwoLinesContent: FC<TwoLinesContentProps> = ({
  firstContentTranslationKey,
  secondContentTranslationKey,
  icon,
}) => {
  return (
    <div className={styles.content}>
      {icon}
      <div className={styles.twoLinesInfo}>
        <TextLine>{firstContentTranslationKey}</TextLine>
        <TextLine>{secondContentTranslationKey}</TextLine>
      </div>
    </div>
  );
};
