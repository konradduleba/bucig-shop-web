import { LoginUserResponse } from '@types';
import { Awaitable, User } from 'next-auth';

export const extractCredentialsUserData = ({
  jwt,
  user,
}: LoginUserResponse): Awaitable<User> => {
  const { id, email, username } = user;

  return {
    id,
    email,
    name: username,
    image: null,
    jwt,
  };
};
