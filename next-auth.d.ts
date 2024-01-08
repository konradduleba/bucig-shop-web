// types/next-auth.d.ts

import NextAuth, { DefaultSession } from 'next-auth';
import { StrapiErrorType } from './src/types';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken: string;
      userId: number;
    } & DefaultSession['user'];
  }

  interface User {
    id: number;
    jwt: string;
    error?: StrapiErrorType;
  }
}
