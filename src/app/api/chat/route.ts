import { NextResponse } from "next/server";
import { localConciergeReply, type ChatMessage } from "@/lib/chat";

export async function POST(request: Request) {
  const body = (await request.json()) as { messages?: ChatMessage[] };
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const reply = localConciergeReply(messages);
  return NextResponse.json({ reply, source: "local" });
}
