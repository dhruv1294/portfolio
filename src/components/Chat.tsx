"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";

// Helper function to extract text content from message parts
function getMessageText(message: { parts: Array<{ type: string; text?: string }> }): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text || "")
    .join("");
}

export default function Chat() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isLoading = status === "submitted" || status === "streaming";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-3xl mx-auto bg-[var(--bg-card)] rounded-lg shadow-md overflow-hidden border border-[var(--border-color)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-[var(--text-muted)] mt-8">
            <p className="text-lg mb-2">Ask me anything about Dhruv!</p>
            <p className="text-sm">
              Try: &quot;What are your skills?&quot; or &quot;Tell me about your projects&quot;
            </p>
          </div>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === "user"
                  ? "bg-[var(--user-bubble)] text-white"
                  : "bg-[var(--ai-bubble)] text-[var(--text-primary)]"
              }`}
            >
              <p className="whitespace-pre-wrap">{getMessageText(message)}</p>
            </div>
          </div>
        ))}
        {isLoading && messages.length > 0 && messages[messages.length - 1].role === "user" && (
          <div className="flex justify-start">
            <div className="bg-[var(--ai-bubble)] rounded-lg px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full animate-bounce [animation-delay:100ms]" />
                <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full animate-bounce [animation-delay:200ms]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-[var(--border-color)]"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-4 py-2 bg-[var(--bg-input)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--text-primary)] placeholder-[var(--text-muted)]"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-2 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
