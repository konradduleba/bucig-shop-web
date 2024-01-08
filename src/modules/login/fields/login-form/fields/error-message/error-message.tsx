import { FC } from 'react';

import { ErrorResponse } from '@types';

import Typography from '@components/typography';

import styles from './error-message.module.scss';

interface ErrorMessageProps {
  error: ErrorResponse;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  const { error: message } = error;

  return (
    <Typography.Text size="12" className={styles.error}>
      {message}
    </Typography.Text>
  );
};
