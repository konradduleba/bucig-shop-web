import { DOMAttributes, FC, PropsWithChildren } from 'react';

import styles from './icon-hover.module.scss';

type IconHoverProps = Pick<
  DOMAttributes<HTMLDivElement>,
  'onMouseEnter' | 'onMouseLeave' | 'onClick'
>;

const IconHover: FC<PropsWithChildren<IconHoverProps>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={styles.container}>
      {children}
    </div>
  );
};

export default IconHover;
