import { Account } from 'next-auth';
import { nonAuthorizeApi } from '@api';
import { LoginUserResponse } from '@types';

export const getAuthCallbackUserData = async ({
  provider,
  access_token,
}: Account) => {
  const url = `/auth/${provider}/callback?access_token=${access_token}`;

  const {
    data: { jwt, user },
  } = await nonAuthorizeApi.get<LoginUserResponse>(url);

  return {
    accessToken: jwt,
    userId: user.id,
  };
};
