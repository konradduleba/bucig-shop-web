import cn from 'classnames';
import type {
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';
import { useMemo, useRef, useState, forwardRef } from 'react';

import InputAdditionalPart from './input-additional-part/input-additional-part';
import styles from './text-input.module.scss';

export type Variant = 'primary' | 'secondary';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  isDirty?: boolean;
  isReadOnly?: boolean;
  leftIcon?: ReactNode;
  leftIconClass?: string;
  prefix?: string | undefined;
  rightIcon?: ReactNode;
  rightIconClass?: string;
  suffix?: string | undefined;
  variant?: Variant;
  formattedMask?: string | null;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      value,
      leftIcon,
      rightIcon,
      disabled,
      error,
      prefix,
      suffix,
      isDirty,
      onFocus,
      onChange,
      onBlur,
      className,
      variant = 'primary',
      leftIconClass,
      rightIconClass,
      isReadOnly,
      readOnly,
      formattedMask,
      ...restProps
    },
    outerRef,
  ) => {
    const isFilled = useMemo(() => {
      return value && value?.toString().trim() !== '';
    }, [value]);
    const [focused, setFocused] = useState(false);
    const innerRef = useRef();
    const ref = (outerRef ||
      innerRef) as unknown as RefObject<HTMLInputElement>;
    const shouldDisplayMask = !focused && formattedMask;

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true);
      onFocus?.(e);
    };

    const focusInput = () => {
      if (ref.current) {
        ref.current.focus();
      }
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false);
      onBlur?.(e);
    };

    return (
      <div className={styles.container}>
        {prefix ? (
          <InputAdditionalPart
            variant="prefix"
            text={prefix}
            disabled={disabled}
          />
        ) : null}
        <div className={styles.inputContainer}>
          {leftIcon ? (
            <div className={cn(styles.icon, styles.iconLeft, leftIconClass)}>
              {leftIcon}
            </div>
          ) : null}
          {shouldDisplayMask && (
            <div
              className={cn(styles.formattedMask, {
                [styles.disabled]: disabled,
              })}
              onClick={focusInput}
            >
              {formattedMask}
            </div>
          )}
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            disabled={disabled}
            // Datepicker can't pass readOnly parameter without custom prop
            readOnly={readOnly || isReadOnly}
            className={cn(styles.input, className, styles[variant], {
              [styles.prefixInputBorder]: prefix,
              [styles.suffixInputBorder]: suffix,
              [styles.inputError]: error,
              [styles.leftIconInputPadding]: leftIcon,
              [styles.rightIconInputPadding]: rightIcon,
              [styles.inputFilled]: (isFilled || isDirty) && !error,
            })}
            value={value}
            onChange={onChange}
            {...restProps}
          />
          {rightIcon ? (
            <div className={cn(styles.icon, styles.iconRight, rightIconClass)}>
              {rightIcon}
            </div>
          ) : null}
        </div>
        {suffix ? (
          <InputAdditionalPart
            variant="suffix"
            text={suffix}
            disabled={disabled}
          />
        ) : null}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
