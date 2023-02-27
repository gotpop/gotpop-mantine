import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // This flag allows you to use the same email address for multiple accounts.
      // On a commercial site, you'd probably want to disable this.
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      // This flag allows you to use the same email address for multiple accounts.
      // On a commercial site, you'd probably want to disable this.
      allowDangerousEmailAccountLinking: true,
    })
  ],
  secret: process.env.JWT_SECRET,
  events: {
    createUser: async ({ user }) => {
      console.log('user :', user);
    },
    signIn: ({ user, isNewUser }) => {
      console.log('user, isNewUser :', user, isNewUser);
    },
  }
}

export default NextAuth(authOptions)