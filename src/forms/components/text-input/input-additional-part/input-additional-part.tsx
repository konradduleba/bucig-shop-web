import cn from 'classnames';

import styles from './input-additional-part.module.scss';

export interface InputAdditionalPartProps {
  variant: 'prefix' | 'suffix';
  text?: string;
  disabled?: boolean | undefined;
}

export function InputAdditionalPart({
  variant,
  text,
  disabled,
}: InputAdditionalPartProps) {
  return (
    <div
      className={cn(
        variant === 'prefix' ? styles.prefix : styles.suffix,
        styles.inputAdditionalPart,
        disabled && styles.disabled,
      )}
    >
      {text}
    </div>
  );
}

export default InputAdditionalPart;
