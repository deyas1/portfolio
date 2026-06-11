import { useState } from 'react'

const Navbar = ({theme, setTheme}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      <h1 className='text-xl font-bold text-gray-800 dark:text-white'>
        Deyas<span className='text-indigo-500'>.</span>
      </h1>
      <ul className='hidden md:flex gap-8 text-gray-600 dark:text-gray-300'>
        <li><a href="#home" className='hover:text-indigo-500 transition'>Home</a></li>
        <li><a href="#skills" className='hover:text-indigo-500 transition'>Skills</a></li>
        <li><a href="#work" className='hover:text-indigo-500 transition'>My Work</a></li>
        <li><a href="#contact" className='hover:text-indigo-500 transition'>Contact</a></li>
      </ul>
      <div className='flex items-center gap-4'>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-lg'>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a href="#contact" className='hidden md:flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full transition'>
          Connect →
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-gray-700 dark:text-white text-2xl'>
          ☰
        </button>
      </div>
      {menuOpen && (
        <ul className='absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-6 py-8 text-gray-600 dark:text-gray-300 md:hidden'>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>My Work</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
