import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/button';
import cn from 'classnames';

import styles from './action-button.module.scss';
import SvgArrowRightThick from '@icons/arrow-right-thick';

interface ActionButtonProps extends PropsWithChildren {
  className?: string;
}

const ActionButton: FC<ActionButtonProps> = ({ className, children }) => {
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

export default ActionButton;
