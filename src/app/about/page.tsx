import { profile } from "@/data/profile";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">About Me</h1>

        <section className="mb-12 bg-white rounded-lg p-6 shadow-md">
          {profile.bioLines.map((line, index) => (
            <p key={index} className="text-lg text-gray-600 leading-relaxed mb-3 last:mb-0">
              {line}
            </p>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experience & Education</h2>
          <div className="space-y-4">
            {profile.timeline.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center flex-shrink-0">
                    {item.icon === "work" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    )}
                    {item.icon === "education" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    )}
                    {item.icon === "internship" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.company}</p>
                    {item.companyDescription && (
                      <p className="text-gray-400 text-xs">{item.companyDescription}</p>
                    )}
                    <p className="mt-2 text-gray-700">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
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
        </section>
      </div>
    </div>
  );
}
