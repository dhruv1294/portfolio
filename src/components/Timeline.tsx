import Image from "next/image";

interface TimelineItem {
  title: string;
  company: string;
  companyDescription?: string;
  description: string;
  skills: string[];
  icon: "work" | "education" | "internship";
  side: "left" | "right";
  logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

function TimelineLogo({ logo, company }: { logo?: string; company: string }) {
  if (logo) {
    return (
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[var(--border-color)] overflow-hidden">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    );
  }

  // Fallback to a generic icon if no logo
  return (
    <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    </div>
  );
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line - hidden on mobile, centered on desktop */}
      <div
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#3b82f6] opacity-40"
      />
      {/* Vertical line for mobile - on the left */}
      <div
        className="md:hidden absolute left-7 w-0.5 h-full bg-[#3b82f6] opacity-40"
      />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Logo - left on mobile, center on desktop */}
            <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
              <TimelineLogo logo={item.logo} company={item.company} />
            </div>

            {/* Card - full width on mobile with left padding, alternating on desktop */}
            <div
              className={`ml-20 md:ml-0 md:w-5/12 ${
                item.side === "right" ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
              }`}
            >
              <div className="bg-[var(--bg-card)] rounded-lg p-4 md:p-6 shadow-md border border-[var(--border-color)]">
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-1">{item.company}</p>
                {item.companyDescription && (
                  <p className="text-[var(--text-muted)] text-xs mt-1">
                    {item.companyDescription}
                  </p>
                )}
                <p className="text-[var(--text-primary)] text-sm md:text-base font-medium mt-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 md:px-3 py-1 text-xs border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
