import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from "next-auth/providers/google"
import { AuthOptions } from 'next-auth'
import { prisma } from './prisma';
import { Adapter } from 'next-auth/adapters';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id, admin: user.admin } as { id: string; name: string; email: string, admin: boolean };

      return session;
    },
  },
};