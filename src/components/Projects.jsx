const Projects = () => {

  const projects = [
    {
      title: "LPG Management System",
      description:
        "A Java Swing application for managing LPG customers, cylinders and delivery records.",
      tech: "Java, OOP, Swing"
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using React and Tailwind CSS.",
      tech: "React, Tailwind CSS"
    },
  
  ]

  return (
    <section
      id="projects"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          My Projects
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Some projects I have built while learning software development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="font-medium text-indigo-500">
                {project.tech}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects