import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { useGetFooterHeight, useHandleGlobalCSSVariable } from '@hooks';

import styles from './page-wrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  center?: boolean;
}

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  className,
  center,
  children,
}) => {
  const { footerHeight } = useGetFooterHeight();
  const { setGlobalCSSVariable } = useHandleGlobalCSSVariable();

  center && setGlobalCSSVariable('--footer-height', `${footerHeight}px`);

  return (
    <div
      className={cn(styles.container, className, { [styles.center]: center })}
    >
      {children}
    </div>
  );
};
