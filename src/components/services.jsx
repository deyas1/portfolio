const services = [
  { icon: '💻', title: 'Web Development', desc: 'Building modern, fast and responsive websites using React, Tailwind and more.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Designing clean and beautiful interfaces that users love.' },
  { icon: '⚙️', title: 'Backend Development', desc: 'Building powerful APIs and server-side applications.' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Making sure your website looks great on all screen sizes.' },
]

const Services = () => {
  return (
    <div id='skills' className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-center'>
      <h2 className='text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-white mb-4'>How can I help?</h2>
      <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-14'>
        From strategy to execution, I craft digital solutions that move your business forward.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-left hover:border-indigo-300 transition'>
            <div className='w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-2xl mb-4'>
              {service.icon}
            </div>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>{service.title}</h3>
            <p className='text-gray-500 dark:text-gray-400'>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
