'use client';

import { FC } from 'react';

import { useGetLogin } from '@api';
import { useI18nContext } from '@i18n';

import { LoginPage } from '@modules/login';

export const Login: FC = () => {
  const { locale } = useI18nContext();
  const content = useGetLogin(locale);

  return content && <LoginPage {...content} />;
};
