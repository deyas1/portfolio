const Hero = () => {
  return (
    <div id='home' className='px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-10 text-center'>
      <div className='inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-1.5 mb-8'>
        <span className='text-sm text-gray-600 dark:text-gray-300'>
          Available for work
        </span>
      </div>
      <h1 className='text-5xl lg:text-7xl font-semibold text-gray-800 dark:text-white leading-tight mb-6'>
        Hi, I am Deyas <br />
        <span className='text-indigo-500'>Aspiring Frontend</span> Developer.
      </h1>
      <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 text-lg'>
        A BCS.IT student passionate about building modern web applications using React, Tailwind CSS and JavaScript. Currently learning and growing as a developer.
      </p>
      <div className='flex justify-center gap-4 mb-16 flex-wrap'>
        <a href="#work" className='bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full transition duration-300 hover:scale-105'>
          View My Work
        </a>
        <a href="#contact" className='border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white px-8 py-3 rounded-full hover:border-indigo-500 transition duration-300 hover:scale-105'>
          Contact Me
        </a>
        <a href="/Deyas_CV.pdf" download className='bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-black transition duration-300 hover:scale-105'>
          Download CV
        </a>
      </div>
      <div className='rounded-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100 dark:border-gray-800'>
        <img
          src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200'
          alt='hero'
          className='w-full object-cover'
        />
      </div>
    </div>
  )
}
export default Hero