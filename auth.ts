import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "@/prisma";
import { User } from "@prisma/client";

const getUser = async (username: string): Promise<null | User> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(
            password,
            user.passwordHash
          );
          if (passwordsMatch) {
            return user;
          }

          return null;
        }
      },
    }),
  ],
});
