
import { AdapterUser } from "next-auth/adapters";
import NextAuth from "next-auth"

declare module "next-auth/adapters" {
  interface AdapterUser {
    admin: boolean;
  }
}


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's name. */
      id: string;
      admin: boolean;
      image?: string;
      name?: string;
      email?: string;

    }
  }
}