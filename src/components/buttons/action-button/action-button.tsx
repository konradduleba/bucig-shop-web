import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { Button } from '../button/button';

import SvgArrowRightThick from '@icons/arrow-right-thick';

import styles from './action-button.module.scss';

interface ActionButtonProps {
  className?: string;
}

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  className,
  children,
}) => {
  return (
    <Button className={cn(styles.button, className)}>
      <div className={styles.content}>
        {children}
        <div className={styles.icon}>
          <SvgArrowRightThick fontSize={24} />
        </div>
      </div>
    </Button>
  );
};
