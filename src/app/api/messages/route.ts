import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { senderId, receiverId, content } = await req.json();
  if (!senderId || !receiverId || !content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const message = await prisma.message.create({
    data: { senderId, receiverId, content },
  });
  return NextResponse.json(message);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const otherUserId = searchParams.get("otherUserId");
  if (!userId || !otherUserId) {
    return NextResponse.json({ error: "Missing user ids" }, { status: 400 });
  }
  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { senderId: userId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: userId },
      ],
    },
    orderBy: { id: "asc" },
  });
  return NextResponse.json(messages);
}
