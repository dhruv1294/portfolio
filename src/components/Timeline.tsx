interface TimelineItem {
  title: string;
  company: string;
  companyDescription?: string;
  description: string;
  skills: string[];
  icon: "work" | "education" | "internship";
  side: "left" | "right";
}

interface TimelineProps {
  items: TimelineItem[];
}

function TimelineIcon({ type }: { type: TimelineItem["icon"] }) {
  const icons = {
    work: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
    education: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    internship: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <div className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg">
      {icons[type]}
    </div>
  );
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Icon in center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <TimelineIcon type={item.icon} />
            </div>

            {/* Card */}
            <div
              className={`w-5/12 ${
                item.side === "right" ? "ml-auto pl-8" : "mr-auto pr-8"
              }`}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.company}</p>
                {item.companyDescription && (
                  <p className="text-gray-400 text-xs mt-1">
                    {item.companyDescription}
                  </p>
                )}
                <p className="text-gray-700 font-medium mt-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600"
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
