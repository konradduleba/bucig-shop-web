import { FC } from 'react';
import { Button } from '../button/button';
import cn from 'classnames';

import Typography from '@components/typography';
import { TextProps } from '@components/typography/text/text';

import styles from './round-button.module.scss';

interface RoundButton {
  text: string;
  renderIcon: () => JSX.Element;
  className?: string;
  textProps?: TextProps;
}

export const RoundButton: FC<RoundButton> = ({
  className,
  text,
  renderIcon,
  textProps,
}) => {
  return (
    <Button className={cn(styles.button, className)}>
      {renderIcon()}
      <Typography.Text size="16" {...textProps}>
        {text}
      </Typography.Text>
    </Button>
  );
};
