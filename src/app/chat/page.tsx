import Chat from "@/components/Chat";

export default function ChatPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto mb-4">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Chat with AI</h1>
        <p className="text-[var(--text-secondary)] mt-2">
          Ask me anything about my background, skills, or projects!
        </p>
      </div>
      <Chat />
    </div>
  );
}
