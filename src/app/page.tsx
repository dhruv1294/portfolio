import { profile } from "@/data/profile";
import TypingAnimation from "@/components/TypingAnimation";
import TerminalBio from "@/components/TerminalBio";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hi! I&apos;m {profile.name}
        </h1>
        <p className="text-xl text-gray-500 h-8">
          <TypingAnimation words={profile.typingWords} />
        </p>
      </section>

      {/* Terminal Bio Section */}
      <section className="mb-12 px-4">
        <TerminalBio lines={profile.bioLines} />
      </section>

      {/* Resume Download Button */}
      <section className="text-center mb-20">
        <a
          href={profile.resumeUrl}
          download
          className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-md"
        >
          DOWNLOAD MY RESUME
        </a>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto">
        <Timeline items={profile.timeline} />
      </section>

      {/* Contact Links */}
      <section className="mt-20 text-center">
        <div className="flex gap-8 justify-center">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
