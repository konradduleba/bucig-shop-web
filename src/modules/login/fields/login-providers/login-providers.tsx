import { FC } from 'react';

import { SignInWithGithub, SignInWithGoogle } from './fields';

import styles from './login-providers.module.scss';

export const LoginProviders: FC = () => {
  return (
    <div className={styles.container}>
      <SignInWithGoogle />
      <SignInWithGithub />
    </div>
  );
};
