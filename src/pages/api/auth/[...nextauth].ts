import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const user = await fetch(
          `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              accept: "application/json",
            },
            body: Object.entries(credentials)
              .map((e) => e.join("="))
              .join("&"),
          },
        )
          .then((res) => res.json())
          .catch((err) => {
            return null;
          });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
      // authorize(credentials, req) {
      //   const { email, password } = credentials as {
      //     email: string;
      //     password: string;
      //   };
      //   // perform you login logic
      //   // find out user from db
      //   if (email !== "john@gmail.com" || password !== "123456") {
      //     throw new Error("invalid credentials");
      //   }

      //   // if everything is fine
      //   return {
      //     id: "123456",
      //     name: "John Doe",
      //     email: "john@gmail.com",
      //     role: "admin",
      //   };
      // },
    }),
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
  pages: {
    signIn: '/login',
  },
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



