import { FC } from 'react';
import { signIn } from 'next-auth/react';

import { PROTECTED_ROUTES } from '@utils';

import SvgGoogle from '@icons/google';

import { SignInProviders } from '@types';

import { useI18nContext } from '@i18n';

import { SignIn } from '../sign-in/sign-in';

import { ICON_FONT_SIZE } from '../constants';

export const SignInWithGoogle: FC = () => {
  const { LL } = useI18nContext();

  const onSignInWithGoogle = () => {
    signIn(SignInProviders.GOOGLE, {
      callbackUrl: PROTECTED_ROUTES.DASHBOARD(),
    });
  };

  return (
    <SignIn
      renderIcon={() => <SvgGoogle fontSize={ICON_FONT_SIZE} />}
      text={LL.LOGIN.SIGN_IN_WITH_GOOGLE()}
      onClick={onSignInWithGoogle}
    />
  );
};
