// Your profile data - customize this with your information
// This will be used by the AI chat to answer questions about you

export const profile = {
  name: "Dhruv Kachhadia",

  // Words that cycle in the typing animation
  typingWords: [
    "A Software Engineer",
    "A Problem Solver",
    "A Tech Enthusiast",
    "A Full-Stack Developer",
  ],

  // Lines displayed in the terminal-style bio box
  bioLines: [
    "I'm a software engineer with 2+ years of experience at Oracle, working on Big Data cloud services.",
    "Currently pursuing my Master's in Computer Science at UW-Madison, focusing on distributed systems and AI.",
    "I'm fluent in Python, Java, C++, and love building scalable backend systems and automation tools.",
  ],

  // Resume file path (place your resume in /public folder)
  resumeUrl: "/resume.pdf",

  skills: [
    "Python",
    "Java",
    "C++",
    "Scala",
    "Kotlin",
    "Dart",
    "Flask",
    "gRPC",
    "Hadoop",
    "Spark",
    "Kafka",
    "Redis",
    "Docker",
    "Linux",
    "OCI",
    "Flutter",
    "PyTorch",
    "Shell Scripting",
    "Pytest"
  ],

  // Timeline items for home page (highlights)
  timeline: [
    {
      title: "MS in Computer Science",
      company: "University of Wisconsin-Madison",
      companyDescription: "Aug 2025 - Present (GPA: 3.83/4)",
      description: "Focusing on Big Data Systems, Distributed Systems, and Foundation Models.",
      skills: ["Spark", "Kafka", "Cassandra", "PyTorch", "Docker", "gRPC", "Python", "Linux", "Distributed Systems", "Foundation Models"],
      icon: "education" as const,
      side: "left" as const,
      logo: "/logos/UW_madison.png",
    },
    {
      title: "Member of Technical Staff",
      company: "Oracle Cloud - Big Data Service",
      companyDescription: "Jul 2023 - Aug 2025 | Bangalore, India",
      description: "Built data plane APIs, optimized build times by 75%, fixed customer-impacting bugs in Hadoop ecosystem.",
      skills: ["Python", "Flask", "Redis", "Hadoop", "Pytest", "OCI", "Shell Scripting", "Apache Bigtop", "Apache Ambari", "emberjs", "Microservices"],
      icon: "work" as const,
      side: "right" as const,
      logo: "/logos/oracle.png",
    },
    {
      title: "Software Engineering Intern",
      company: "Oracle Cloud - Fusion Data Lake",
      companyDescription: "Jun 2022 - Jul 2022 | Bangalore, India",
      description: "Built a MergeInto Validator plugin in Scala using Apache Spark, reducing debugging time by 83%.",
      skills: ["Scala", "Apache Spark", "Delta Lake", "Junit"],
      icon: "internship" as const,
      side: "left" as const,
      logo: "/logos/oracle.png",
    },
    {
      title: "B.Tech in Computer Science",
      company: "NIT Tiruchirappalli",
      companyDescription: "Jul 2019 - May 2023 (GPA: 8.64/10)",
      description: "Studied algorithms, OS, networks, ML, databases, and distributed systems.",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "DBMS", "OS", "Computer Networks", "Native Android", "Flutter", "Java", "Kotlin"],
      icon: "education" as const,
      side: "right" as const,
      logo: "/logos/NITT_logo.png",
    },
  ],

  // Detailed experience for About page
  experience: [
    {
      title: "Member of Technical Staff",
      company: "Oracle Cloud - Big Data Service (BDS) Team",
      location: "Bangalore, India",
      duration: "Jul 2023 - Aug 2025",
      logo: "/logos/oracle.png",
      highlights: [
        "Optimized Apache Bigtop build time by 75% (4h→1h), improving productivity and feature/bugfix cycles.",
        "Key contributor in design and development of Resource Principal Session Token (RPST) support for Big Data Service clusters. Implemented data plane APIs in Python Flask backed by Redis.",
        "Investigated and fixed customer-impacting bugs in core Big Data components such as Hadoop MapReduce, Oozie, and resolved patching-related issues.",
        "Implemented end-to-end automated tests with Pytest, improving test coverage and reducing manual validation effort.",
        "Resolved critical CVEs across BDS components, improving security posture and ensuring compliance.",
        "Contributed to Ranger KMS onboarding, enhancing Ambari frontend for smooth OCI Vault integration.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Oracle Cloud - Fusion Data Lake Team",
      location: "Bangalore, India",
      duration: "Jun 2022 - Jul 2022",
      logo: "/logos/oracle.png",
      highlights: [
        "Designed and implemented a MergeInto Validator plugin in Scala using Apache Spark to validate MERGE INTO operations in Delta Lake and automatically resolve detected issues.",
        "Delivered real-time validation reports and automated problem healing, reducing developer debugging time from 1 hour to under 10 minutes (83% improvement).",
      ],
    },
  ],

  // Detailed education for About page
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Wisconsin-Madison",
      location: "Madison, WI",
      duration: "Aug 2025 - May 2027",
      gpa: "3.83/4.0",
      logo: "/logos/UW_madison.png",
      coursework: ["Big Data Systems", "Distributed Systems", "Foundation Models", "Advanced Operating Systems", "Artificial Intelligence"],
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "National Institute of Technology, Tiruchirappalli",
      location: "Tiruchirappalli, India",
      duration: "Jul 2019 - May 2023",
      gpa: "8.64/10",
      logo: "/logos/NITT_logo.png",
      coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Machine Learning", "Database Management Systems", "Software Engineering"],
    },
  ],

  projects: [
    {
      name: "Portfolio Website",
      description: "Personal portfolio with AI-powered chat that answers questions about me, built with modern web technologies.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "Claude API"],
      link: "#",
      github: "https://github.com/dhruv1294/portfolio",
      image: "/projects/portfolio.png",
    },
    {
      name: "Dalal Street",
      description: "Cross-platform stock market simulation game client for Pragyan'22 with 500+ participants. Implemented Bloc state management and integrated with backend via gRPC.",
      technologies: ["Dart", "Flutter", "gRPC", "Bloc"],
      link: "#",
      github: "https://github.com/delta/dalal-street-client",
      image: "/projects/dalal-street.webp",
    },
    {
      name: "Smart Note",
      description: "Document-scanning Android app for an NGO supporting blind women. Features text recognition with Google ML Kit and Google Drive backup.",
      technologies: ["Kotlin", "Android", "MVVM", "Google ML Kit", "SQLite Room"],
      link: "#",
      github: "https://github.com/dhruv1294/smart-note",
      image: "/projects/smart-note.jpg",
    },
    {
      name: "NITT News & Updates",
      description: "Android app for NIT Trichy students to get latest news, view PDF notices, and chat with admins. Features Firebase real-time database, cloud messaging, and event reminder notifications.",
      technologies: ["Java", "Android", "Firebase", "Retrofit", "Cloud Messaging"],
      link: "#",
      github: "https://github.com/dhruv1294/NIT_Trichy",
      image: "/logos/NITT_logo.png",
    },
    {
      name: "Vortex 21",
      description: "Official Android app for NIT Trichy's annual CSE symposium. Enables participation in workshops, events, and guest lectures with real-time updates. Published on Google Play Store.",
      technologies: ["Kotlin", "Android", "Firebase", "Gradle KTS"],
      link: "#",
      github: "https://github.com/dhruv1294/android-vortex-21",
      image: "/projects/vortex.png",
    },
    {
      name: "Pokedex",
      description: "Android app with comprehensive Pokémon database covering all generations. Features regions, locations, items, types, favorites system, and social sharing with Material Design UI.",
      technologies: ["Java", "Android", "MVVM", "Room", "Retrofit", "LiveData"],
      link: "#",
      github: "https://github.com/dhruv1294/Pokedex",
      image: "/projects/pokedex.png",
    },
  ],

  achievements: [
    {
      title: "Pragyan'21 Hackathon",
      description: "Best Tech-Stack Winner",
    },
    {
      title: "JEE Advanced 2019",
      description: "All India Rank 2120",
    },
    {
      title: "JEE Mains 2019",
      description: "All India Rank 1294",
    },
  ],

  contact: {
    email: "kachhadiadhruv@gmail.com",
    github: "https://github.com/dhruv1294",
    linkedin: "https://linkedin.com/in/dhruv-kachhadia",
    phone: "+1-6088660424",
  },
};

// Generate a context string for the AI
export function getProfileContext(): string {
  return `
You are an AI assistant on ${profile.name}'s portfolio website. Answer questions about ${profile.name} based on the following information:

Name: ${profile.name}
Bio: ${profile.bioLines.join(" ")}

Skills: ${profile.skills.join(", ")}

Work Experience:
${profile.experience.map((exp) => `- ${exp.title} at ${exp.company} (${exp.duration}): ${exp.highlights.join(" ")}`).join("\n")}

Education:
${profile.education.map((edu) => `- ${edu.degree} from ${edu.school} (${edu.duration}, GPA: ${edu.gpa}). Coursework: ${edu.coursework.join(", ")}`).join("\n")}

Projects:
${profile.projects.map((proj) => `- ${proj.name}: ${proj.description}. Technologies: ${proj.technologies.join(", ")}`).join("\n")}

Achievements:
${profile.achievements.map((ach) => `- ${ach.title}: ${ach.description}`).join("\n")}

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
