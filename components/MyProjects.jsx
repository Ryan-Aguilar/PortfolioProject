import React from 'react';

const MyProjects = () => {
  const projects = [
    {
      title: "El-Camino-2023-Solution-Challenge",
      date: "Nov 2023 - Mar 2024",
      description:
        "A Flutter app to help students figure out which classes they need to take.",
      link: "https://github.com/El-Camino-Google-Developer-Student-Club/El-Camino-2023-Solution-Challenge/blob/main/README.md",
    },
    {
      title: "Portfolio",
      date: "Apr 2025 - TBD",
      description:
        "A personal site to showcase my Computer Science background and projects.",
      link: "https://your-portfolio-link.com",
    },
  ];

  return (
    <div className="w-full text-white py-16 px-4 bg-gray-900" id="projects">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#23bdff]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 hover:bg-gray-700 transition-all duration-200 p-6 rounded-lg shadow-md cursor-pointer"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.date}</p>
              <p className="text-md">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;