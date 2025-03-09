import prisma from "@/prisma";

export const GET = async () => {
  const users = await prisma.user.findMany();
  return Response.json({ users });
};
