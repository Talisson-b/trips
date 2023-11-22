import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

import { prisma } from "@/lib/prisma";

// Interface estendida com a propriedade 'admin'
interface ExtendedAdapterUser extends Adapter {
  admin: boolean;
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as ExtendedAdapterUser,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id, admin: user.admin! } as { id: string; name: string; email: string; admin: boolean };

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };