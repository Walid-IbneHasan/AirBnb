import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./../../lib/db";
import { NextResponse } from "next/server";

export  async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id || user === null) {
    throw new Error("Something  is wrong");
  }
  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    let dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
    return NextResponse.redirect("https:localhost:3000");
  }
}
