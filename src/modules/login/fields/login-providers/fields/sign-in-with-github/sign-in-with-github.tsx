import { signIn } from 'next-auth/react';
import { FC } from 'react';

import { SignInProviders } from '@types';

import SvgGithub from '@icons/github';

import { PROTECTED_ROUTES } from '@utils';

import { useI18nContext } from '@i18n';

import { SignIn } from '../sign-in/sign-in';

import { ICON_FONT_SIZE } from '../constants';

export const SignInWithGithub: FC = () => {
  const { LL } = useI18nContext();

  const onSignInWithGithub = () => {
    signIn(SignInProviders.GITHUB, {
      callbackUrl: PROTECTED_ROUTES.DASHBOARD(),
    });
  };

  return (
    <SignIn
      renderIcon={() => <SvgGithub fontSize={ICON_FONT_SIZE} />}
      text={LL.LOGIN.SIGN_IN_WITH_GITHUB()}
      onClick={onSignInWithGithub}
    />
  );
};
