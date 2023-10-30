import { FC } from 'react';
import SvgArrowRight from '@icons/arrow-right';

import { ARROW_FONT_SIZE } from '../content/content.consts';

import { TextLine } from '../content/text-line';

import styles from './write-message.module.scss';

export const WriteMessage: FC = () => {
  return (
    <div className={styles.writeMessage}>
      <TextLine>Write a message</TextLine>
      <SvgArrowRight fontSize={ARROW_FONT_SIZE} />
    </div>
  );
};
