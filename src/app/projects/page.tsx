import { profile } from "@/data/profile";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Projects</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors">
                {project.name}
              </h2>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
