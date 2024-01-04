import { FC } from 'react';

import Typography from '@components/typography';
import { TextProps } from '@components/typography/text/text';

import styles from './text-divider.module.scss';

interface TextDividerProps {
  text: string;
  textProps?: TextProps;
}

export const TextDivider: FC<TextDividerProps> = ({ text, textProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <Typography.Text size="16" className={styles.text} {...textProps}>
        {text}
      </Typography.Text>
      <div className={styles.divider} />
    </div>
  );
};
