import { FC } from 'react';
import { Button } from '@components/buttons';
import Typography from '@components/typography';

import styles from './sign-in.module.scss';

interface SignInProps {
  renderIcon: () => JSX.Element;
  text: string;
  onClick: () => void;
}

export const SignIn: FC<SignInProps> = ({ renderIcon, text, onClick }) => {
  return (
    <Button className={styles.button} onClick={onClick}>
      {renderIcon()}
      <Typography.Text size="16" className={styles.text}>
        {text}
      </Typography.Text>
    </Button>
  );
};
