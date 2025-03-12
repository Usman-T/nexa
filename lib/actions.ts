"use server";

import prisma from "@/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

const CreateUser = z.object({
  username: z.string().min(1, "Name is required"),
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const createUser = async (formData: FormData) => {
  try {
    const { username, email, password } = CreateUser.parse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        passwordHash: hashedPassword,
      },
    });

    const signInResponse = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (signInResponse?.error) {
      console.error("Sign-in failed:", signInResponse.error);
      throw new Error("Invalid credentials.");
    }
  } catch (error) {
    console.error(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw new Error("Error creating user");
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn("credentials", {
      username: formData.get("name"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }

  redirect("/dashboard");
};

export const handleSignOut = async () => {
  await signOut({ redirectTo: "/" });
};

export const getCurrentUser = async () => {
  const session = await auth();
  
  if (!session?.user) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
     email: session.user.email
    },
  });
  
  if (!user) {
    return null;
  }

  return user;
};
