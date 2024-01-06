import cn from 'classnames';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

import styles from './error-field.module.scss';

type ErrorFieldProps = PropsWithChildren<{
  className?: string;
}> &
  HTMLAttributes<HTMLSpanElement>;

export function ErrorField({
  children,
  className,
  ...rest
}: PropsWithChildren<ErrorFieldProps>) {
  return (
    <span {...rest} className={cn(className, styles.error)}>
      {children}
    </span>
  );
}

export default ErrorField;
