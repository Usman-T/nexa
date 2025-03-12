import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "@/prisma";
import { User } from "@prisma/client";

const getUser = async (email: string): Promise<null | User> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
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
          .object({ email: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(
            password,
            user.passwordHash
          );

          console.log({ passwordsMatch });
          if (passwordsMatch) {
            return user;
          }

          return null;
        }
      },
    }),
  ],
});
