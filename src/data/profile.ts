// Your profile data - customize this with your information
// This will be used by the AI chat to answer questions about you

export const profile = {
  name: "Dhruv",

  // Words that cycle in the typing animation (e.g., "An Innovator", "A Developer")
  typingWords: [
    "An Innovator",
    "A Software Developer",
    "A Problem Solver",
    "A Tech Enthusiast",
  ],

  // Lines displayed in the terminal-style bio box
  bioLines: [
    "I am a passionate software engineer with experience in building web and mobile applications and exploring AI technologies.",
    "I'm fluent at TypeScript, React, Next.js, and more, with a deep interest in full-stack development.",
  ],

  // Resume file path (place your resume in /public folder)
  resumeUrl: "/resume.pdf",

  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
  ],

  // Timeline items for experience section
  timeline: [
    {
      title: "Member of Technical Staff",
      company: "Oracle",
      companyDescription: "Oracle Big Data Service is a fully managed, automated cloud service that provides enterprises with a cost-effective Hadoop environment. Customers easily create secure and scalable Hadoop-based data lakes that can quickly process large amounts of data.",
      description: "Building amazing products and features using modern technologies.",
      skills: ["Python", "Java", "Flask", "ember.js", "OCI", "Redis", "Shell Scripting", "Hadoop Distributed File System", "Big Data Systems", "Linux", "Pytest", "Microservices", "Jira", "Confluence"],
      icon: "work" as const,
      side: "right" as const,
    },
    {
      title: "Internship Program",
      company: "Previous Company",
      companyDescription: "Another great company",
      description: "Learned and contributed to various projects during the internship.",
      skills: ["python", "javascript", "git", "agile"],
      icon: "internship" as const,
      side: "left" as const,
    },
    {
      title: "Computer Science Degree",
      company: "Your University",
      companyDescription: "Bachelor's in Computer Science",
      description: "Studied computer science fundamentals, algorithms, and software engineering.",
      skills: ["algorithms", "data structures", "databases", "networking"],
      icon: "education" as const,
      side: "right" as const,
    },
  ],

  projects: [
    {
      name: "Portfolio Website",
      description: "Personal portfolio with AI-powered chat built with Next.js, Tailwind CSS, and Claude API",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
      link: "#",
    },
    {
      name: "Project Two",
      description: "Description of your second project",
      technologies: ["React", "Node.js"],
      link: "#",
    },
  ],

  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

// Generate a context string for the AI
export function getProfileContext(): string {
  return `
You are an AI assistant on ${profile.name}'s portfolio website. Answer questions about ${profile.name} based on the following information:

Name: ${profile.name}
Bio: ${profile.bioLines.join(" ")}

Skills: ${profile.skills.join(", ")}

Experience & Education:
${profile.timeline.map((item) => `- ${item.title} at ${item.company}: ${item.description}. Skills: ${item.skills.join(", ")}`).join("\n")}

Projects:
${profile.projects.map((proj) => `- ${proj.name}: ${proj.description}. Technologies: ${proj.technologies.join(", ")}`).join("\n")}

Contact:
- Email: ${profile.contact.email}
- GitHub: ${profile.contact.github}
- LinkedIn: ${profile.contact.linkedin}

Guidelines:
- Be friendly and professional
- Only answer questions related to ${profile.name}'s background, skills, projects, and experience
- If asked about something not in the provided information, politely say you don't have that information
- Keep responses concise but helpful
- You can suggest relevant projects or skills when appropriate
`.trim();
}
