import cn from 'classnames';
import { motion } from 'framer-motion';
import type { PropsWithChildren, HTMLAttributes, ChangeEvent } from 'react';
import { useCallback, forwardRef } from 'react';

import styles from './toggle.module.scss';

export type ToggleProps = PropsWithChildren<{
  checked: boolean;
  name: string;
  disabled?: boolean;
  onChangeValue?: (isChecked: boolean) => void;
  className?: string;
}> &
  HTMLAttributes<HTMLInputElement>;

const SPRING = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ children, checked, name, onChangeValue, disabled, className }, ref) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChangeValue?.(event.target.checked);
      },
      [onChangeValue],
    );

    return (
      <div className={cn(styles.wrapper, className)}>
        <input
          ref={ref}
          type="checkbox"
          id={name}
          name={name}
          className={cn(styles.input)}
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
          data-testid={name}
        />

        <label
          htmlFor={name}
          className={cn(styles.label, disabled && styles.disabled)}
        >
          <span className={cn(styles.toggleContainer, checked && styles.isOn)}>
            <motion.span className={styles.toggle} layout transition={SPRING} />
          </span>

          {children}
        </label>
      </div>
    );
  },
);

Toggle.displayName = 'Toggle';
