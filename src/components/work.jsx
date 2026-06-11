const projects = [
  { title: 'Mobile App Marketing', desc: 'A modern marketing website for a mobile app startup.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600', tag: 'React JS' },
  { title: 'Dashboard Management', desc: 'A clean and powerful admin dashboard with charts and analytics.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', tag: 'React JS' },
  { title: 'Portfolio Website', desc: 'A responsive personal portfolio website with dark mode.', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600', tag: 'React JS' },
]

const Work = () => {
  return (
    <div id='work' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-center'>
      <h2 className='text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-white mb-4'>My Latest Work</h2>
      <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-14'>
        Here are some of the projects I have built recently.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden text-left hover:border-indigo-300 transition'>
            <img src={project.img} alt={project.title} className='w-full h-48 object-cover' />
            <div className='p-6'>
              <span className='text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 px-3 py-1 rounded-full'>{project.tag}</span>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white mt-3 mb-2'>{project.title}</h3>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
