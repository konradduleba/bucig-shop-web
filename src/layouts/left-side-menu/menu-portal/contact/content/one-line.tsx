import { FC } from 'react';

import { TextLine } from './text-line';

import styles from './content.module.scss';

interface OneLineContentProps {
  icon: JSX.Element;
  line: string; //@TODO Update after implementing i18n;
}

export const OneLineContent: FC<OneLineContentProps> = ({ line, icon }) => {
  return (
    <div className={styles.content}>
      {icon}
      <TextLine>{line}</TextLine>
    </div>
  );
};
