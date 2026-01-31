interface TerminalBioProps {
  lines: string[];
}

export default function TerminalBio({ lines }: TerminalBioProps) {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
      {/* Terminal header with macOS dots */}
      <div className="bg-[#2d3748] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
      </div>
      {/* Terminal body */}
      <div className="bg-white p-6 text-center">
        {lines.map((line, index) => (
          <p key={index} className="text-gray-500 mb-3 last:mb-0 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
