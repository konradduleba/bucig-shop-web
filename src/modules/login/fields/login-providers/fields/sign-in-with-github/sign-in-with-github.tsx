import { FC } from 'react';

import SvgGithub from '@icons/github';

import { signIn } from 'next-auth/react';

import { useI18nContext } from '@i18n';

import { SignIn } from '../sign-in/sign-in';

import { ICON_FONT_SIZE } from '../constants';

export const SignInWithGithub: FC = () => {
  const { LL } = useI18nContext();

  const onSignInWithGithub = () => {
    signIn('github');
  };

  return (
    <SignIn
      renderIcon={() => <SvgGithub fontSize={ICON_FONT_SIZE} />}
      text={LL.LOGIN.SIGN_IN_WITH_GITHUB()}
      onClick={onSignInWithGithub}
    />
  );
};
