const Skills = () => {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Java",
    "MySQL",
    "Git",
    "GitHub"
  ]

  return (
    <section
      id="skills"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          My Skills
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills