import cn from 'classnames';
import type { PropsWithChildren, ChangeEvent, HTMLAttributes } from 'react';
import { useCallback, forwardRef } from 'react';

import RemoveMinus from '@icons/remove-minus';
import TickIcon from '@icons/tick';

import styles from './checkbox.module.scss';

export type CheckboxSize = 'sm' | 'md';
export type CheckboxAlign = 'top' | 'center' | 'bottom';

export type CheckboxProps = PropsWithChildren<{
  align?: CheckboxAlign;
  checked: boolean;
  disabled?: boolean;
  onChangeValue?: (isChecked: boolean) => void;
  error?: boolean;
  className?: string;
  name?: string;
  size?: CheckboxSize;
  isIndeterminated?: boolean;
  stopPropagation?: boolean;
}> &
  HTMLAttributes<HTMLInputElement>;

const SIZE_TO_CLASS: Record<CheckboxSize, string> = {
  sm: styles.sm,
  md: styles.md,
};

const ALIGN_TO_CLASS: Record<CheckboxAlign, string> = {
  bottom: styles.alignBottom,
  center: styles.alignCenter,
  top: styles.alignTop,
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      align = 'top',
      children,
      checked,
      disabled,
      onChangeValue,
      className,
      error,
      name,
      size = 'sm',
      isIndeterminated = false,
      stopPropagation = true,
    },
    ref,
  ): JSX.Element => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (stopPropagation) event.stopPropagation();
        onChangeValue?.(event.currentTarget.checked);
      },
      [onChangeValue, stopPropagation],
    );

    const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (stopPropagation) e.stopPropagation();
      onChangeValue?.(!checked);
    };

    const getIcon = () => {
      if (isIndeterminated) {
        return <RemoveMinus className={styles.minusIcon} />;
      } else {
        return <TickIcon className={styles.checkboxTick} />;
      }
    };

    return (
      <span
        className={cn(styles.container, className, {
          [styles.disabled]: disabled,
        })}
        onClick={handleClick}
      >
        <span
          className={cn([
            styles.checkbox,
            ALIGN_TO_CLASS[align],
            SIZE_TO_CLASS[size],
            {
              [styles.checkboxError]: error,
              [styles.checked]: checked,
              [styles.disabled]: disabled,
            },
          ])}
        >
          {checked && getIcon()}
        </span>
        <label
          onKeyDown={(e) => (stopPropagation ? e.stopPropagation() : null)}
          onClick={(e) => (stopPropagation ? e.stopPropagation() : null)}
          data-testid={name}
          className={cn(
            styles.label,
            SIZE_TO_CLASS[size],
            { [styles.disabled]: disabled },
            name,
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            className={styles.checkboxInput}
            checked={checked}
            onChange={handleChange}
            name={name}
            disabled={disabled}
          />
          {children}
        </label>
      </span>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
