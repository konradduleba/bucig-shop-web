import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

import { loginUser } from '@api';
import { SignInProviders, StrapiErrorType } from '@types';

import { extractCredentialsUserData, getAuthCallbackUserData } from './helpers';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: {
          type: 'email',
          label: 'E-mail',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { identifier, password } = credentials;

        try {
          const user = await loginUser({
            identifier,
            password,
          }).then(({ data }) => extractCredentialsUserData(data));

          return user;
        } catch (e) {
          const { error } = e as StrapiErrorType;
          throw new Error(error.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (!account) {
        return token;
      }

      const { provider } = account;

      if (provider === SignInProviders.CREDENTIALS) {
        token.accessToken = user.jwt;
        token.userId = user.id;
      }

      if (
        provider === SignInProviders.GITHUB ||
        provider === SignInProviders.GOOGLE
      ) {
        try {
          const { accessToken, userId } =
            await getAuthCallbackUserData(account);

          token.accessToken = accessToken;
          token.userId = userId;
        } catch (e) {
          const { error } = e as StrapiErrorType;
          throw new Error(error.message);
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken as string;
      session.user.userId = token.userId as number;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};
