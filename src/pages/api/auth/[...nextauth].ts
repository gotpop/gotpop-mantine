import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials";

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import axios from "axios";

// allowDangerousEmailAccountLinking: true
// This flag allows you to use the same email address for multiple accounts.
// On a commercial site, you may want to disable this.

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      authorize: async (credentials, req) => {
        const { email, password }: any = { ...credentials }

        return axios
          .post(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/user/check-credentials`, {
            identifier: 'test@test.com',
            password: 'password',
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error.response);
            return null
          })
      },

      //   authorize: async (credentials, req) => {
      //     const user = await fetch(
      //       `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
      //       {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/x-www-form-urlencoded",
      //           accept: "application/json",
      //         },
      //         body: Object.entries(credentials ?? {})
      //           .map((e) => e.join("="))
      //           .join("&"),
      //       },
      //     )
      //       .then((res) => res.json())
      //       .catch((err) => {
      //         return null;
      //       });

      //     if (user) {
      //       return user;
      //     } else {
      //       return null;
      //     }
      //   }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    })
  ]
}

export default NextAuth(authOptions)
