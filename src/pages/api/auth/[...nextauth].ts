import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db";
import bcrypt from "bcrypt";
import loginUser from "./login";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        return loginUser(credentials);
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    // error: "/auth/signin",
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt({ token, user }) {
      // update token
      if (user?.role) {
        token.role = user.role;
        token.id = user.id;
      }
      // return final_token
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
