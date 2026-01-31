interface TerminalBioProps {
  lines: string[];
}

export default function TerminalBio({ lines }: TerminalBioProps) {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
      {/* Terminal header with macOS dots */}
      <div className="bg-[var(--bg-terminal)] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
      </div>
      {/* Terminal body */}
      <div className="bg-[var(--bg-card)] p-6 text-center">
        {lines.map((line, index) => (
          <p key={index} className="text-[var(--text-secondary)] mb-3 last:mb-0 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
