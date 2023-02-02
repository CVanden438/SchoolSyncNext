import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const userData = await prisma.user.findFirst({
          where: { email },
          select: {
            id: true,
            email: true,
            password: true,
            role: true,
            userName: true,
          },
        });
        if (!userData) {
          throw new Error("Invalid Credentials");
        }
        bcrypt.compare(password, userData.password, function (err, result) {
          if (err) {
            throw new Error(err.message);
          }
        });
        //renaming userName to user
        const user = {
          id: userData.id,
          name: userData.userName,
          role: userData.role,
          email: userData.email,
        };
        return user;
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
