import { FC } from 'react';

import SvgGoogle from '@icons/google';

import { signIn } from 'next-auth/react';

import { useI18nContext } from '@i18n';

import { SignIn } from '../sign-in/sign-in';

import { ICON_FONT_SIZE } from '../constants';

export const SignInWithGoogle: FC = () => {
  const { LL } = useI18nContext();

  const onSignInWithGoogle = () => {
    signIn('google');
  };

  return (
    <SignIn
      renderIcon={() => <SvgGoogle fontSize={ICON_FONT_SIZE} />}
      text={LL.LOGIN.SIGN_IN_WITH_GOOGLE()}
      onClick={onSignInWithGoogle}
    />
  );
};
