import { JWT } from "next-auth/jwt";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  //   interface Session {
  //     user?: {
  //       id: string;
  //       role: string;
  //     } & DefaultSession["user"];
  //   }
  interface User {
    role: string;
    id: string;
  }
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
