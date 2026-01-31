import { profile } from "@/data/profile";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-[var(--text-primary)]">About Me</h1>
        <p className="text-[var(--text-secondary)] mb-8">Detailed background and experience</p>

        {/* Bio Section */}
        <section className="mb-12 bg-[var(--bg-card)] rounded-lg p-6 shadow-md border border-[var(--border-color)]">
          {profile.bioLines.map((line, index) => (
            <p key={index} className="text-[var(--text-secondary)] leading-relaxed mb-2 last:mb-0">
              {line}
            </p>
          ))}
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)] flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </span>
            Work Experience
          </h2>
          <div className="space-y-6">
            {profile.experience.map((exp, index) => (
              <div key={index} className="bg-[var(--bg-card)] rounded-lg p-6 shadow-md border border-[var(--border-color)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border border-[var(--border-color)] overflow-hidden flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.title}</h3>
                      <p className="text-[var(--accent)] font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-[var(--text-muted)] text-sm mt-1 sm:mt-0 sm:text-right">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--accent)] mt-1.5 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)] flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </span>
            Education
          </h2>
          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="bg-[var(--bg-card)] rounded-lg p-6 shadow-md border border-[var(--border-color)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex items-start gap-4">
                    {edu.logo && (
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border border-[var(--border-color)] overflow-hidden flex-shrink-0">
                        <Image
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                      <p className="text-[var(--accent)] font-medium">{edu.school}</p>
                    </div>
                  </div>
                  <div className="text-[var(--text-muted)] text-sm mt-1 sm:mt-0 sm:text-right">
                    <p>{edu.duration}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <p className="text-[var(--text-primary)] font-medium mb-3">GPA: {edu.gpa}</p>
                <div>
                  <p className="text-[var(--text-muted)] text-sm mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)] flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </span>
            Technical Skills
          </h2>
          <div className="bg-[var(--bg-card)] rounded-lg p-6 shadow-md border border-[var(--border-color)]">
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[var(--bg-primary)] rounded-full text-sm text-[var(--text-secondary)] border border-[var(--border-color)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)] flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </span>
            Achievements
          </h2>
          <div className="bg-[var(--bg-card)] rounded-lg p-6 shadow-md border border-[var(--border-color)]">
            <div className="space-y-3">
              {profile.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[var(--accent)]">★</span>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">{achievement.title}</span>
                    <span className="text-[var(--text-muted)]"> — {achievement.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
