import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { getProfileContext } from "@/data/profile";

export const maxDuration = 30;

// Transform UI messages (with parts) to model messages (with content)
function transformMessages(messages: Array<{ role: string; parts?: Array<{ type: string; text?: string }>; content?: string }>) {
  return messages.map((msg) => {
    const role = msg.role as "user" | "assistant";
    if (msg.content) {
      return { role, content: msg.content };
    }
    if (msg.parts) {
      const textContent = msg.parts
        .filter((part) => part.type === "text")
        .map((part) => part.text || "")
        .join("");
      return { role, content: textContent };
    }
    return { role, content: "" };
  });
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const transformedMessages = transformMessages(messages);

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: getProfileContext(),
    messages: transformedMessages,
  });

  return result.toUIMessageStreamResponse();
}
