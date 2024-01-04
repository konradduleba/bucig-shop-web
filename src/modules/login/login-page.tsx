import { FC } from 'react';

import { Login } from '@types';

import { Section } from '@layouts';

import {
  ContentWrapper,
  LoginForm,
  LoginProviders,
  OrSeparator,
} from './fields';

import styles from './login-page.module.scss';

export const LoginPage: FC<Login> = ({ backgroundImage: { url } }) => {
  return (
    <Section
      className={styles.container}
      style={{ backgroundImage: `url(${url})` }}
    >
      <ContentWrapper>
        <LoginForm />
        <OrSeparator />
        <LoginProviders />
      </ContentWrapper>
    </Section>
  );
};
