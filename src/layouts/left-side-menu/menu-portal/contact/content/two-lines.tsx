import { FC } from 'react';

import { TextLine } from './text-line';

import styles from './content.module.scss';

interface TwoLinesContentProps {
  icon: JSX.Element;
  firstLine: string;
  secondLine: string;
}

export const TwoLinesContent: FC<TwoLinesContentProps> = ({
  firstLine,
  secondLine,
  icon,
}) => {
  return (
    <div className={styles.content}>
      {icon}
      <div className={styles.twoLinesInfo}>
        <TextLine>{firstLine}</TextLine>
        <TextLine>{secondLine}</TextLine>
      </div>
    </div>
  );
};
