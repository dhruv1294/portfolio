import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { getProfileContext } from "@/data/profile";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: getProfileContext(),
    messages,
  });

  return result.toUIMessageStreamResponse();
}
