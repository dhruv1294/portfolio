import Chat from "@/components/Chat";

export default function ChatPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Chat with AI</h1>
        <p className="text-gray-500 mt-2">
          Ask me anything about my background, skills, or projects!
        </p>
      </div>
      <Chat />
    </div>
  );
}
