const Education = () => {
  return (
    <section
      id="education"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education
        </h2>

        <div className="space-y-8">

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              BCS.IT
            </h3>

            <p className="text-indigo-500 font-medium">
              KFA Schools of Business and IT
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              2024 - Present
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              +2 Management
            </h3>

            <p className="text-gray-500 dark:text-gray-400">
              Completed Higher Secondary Education
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education