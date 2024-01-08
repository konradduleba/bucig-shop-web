import { Credentials, LoginUserResponse } from '@types';
import { nonAuthorizeApi } from '../axios';

export const loginUser = (credentials: Credentials) => {
  const url = '/auth/local';
  return nonAuthorizeApi.post<LoginUserResponse>(url, credentials);
};
