import { NextAuthOptions } from 'next-auth';

// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

export const authConfig: NextAuthOptions = {
  providers: [
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
    // This method is not invoked when you persist sessions in a database.
    async jwt({ token, account }) {
      if (account) {
        const res = await fetch(
          `${process.env.STRAPI_BACKEND_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`,
        );
        const data = await res.json();
        const { jwt, user } = data;
        token.accessToken = jwt;
        token.userId = user.id;
      }
      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.accessToken = token.accessToken as string;
      session.user.userId = token.userId as number;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  // pages: {
  //   signIn: '//login',
  // },
};
