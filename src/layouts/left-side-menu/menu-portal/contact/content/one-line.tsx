import { FC } from 'react';

import { TextLine } from './text-line';

import styles from './content.module.scss';

export interface OneLineContentProps {
  icon: JSX.Element;
  contentTranslationKey: string; //@TODO Update after implementing i18n;
}

export const OneLineContent: FC<OneLineContentProps> = ({
  contentTranslationKey,
  icon,
}) => {
  return (
    <div className={styles.content}>
      {icon}
      <TextLine>{contentTranslationKey}</TextLine>
    </div>
  );
};
