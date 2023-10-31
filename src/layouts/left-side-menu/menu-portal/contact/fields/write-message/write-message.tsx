import { FC } from 'react';
import SvgArrowRight from '@icons/arrow-right';
import { useI18nContext } from '@i18n/i18n-react';

import { TextLine } from '../../content/text-line';
import { ARROW_FONT_SIZE } from '../../content/content.consts';

import styles from './write-message.module.scss';

export const WriteMessage: FC = () => {
  const { LL } = useI18nContext();

  return (
    <div className={styles.writeMessage}>
      <TextLine>{LL.COMMON.WRITE_A_MESSAGE()}</TextLine>
      <SvgArrowRight fontSize={ARROW_FONT_SIZE} />
    </div>
  );
};
