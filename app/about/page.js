import React from 'react'
import SectionAbout from './Section'

const About = () => {
  return (
    <div className='mt-24 gap-3 text-slate-900 dark:text-white flex flex-col items-center overflow-y-hidden'>

      <div className="flex justify-center">
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/bgebyztw.json"
          trigger="loop"
          stroke="bold"
          colors="primary:#109121,secondary:#66ee78"
          style={{ width: 50 + "px", height: 50 + "px", position: "relative", top: 10 + "px",zIndex: -10,}}>
        </lord-icon>
        <h1 className='-z-10 md:hover:text-green-500 uppercase relative top-4 text-4xl md:hover:scale-125 transition-all duration-200 text-slate-900 dark:text-slate-100'>Our Team</h1>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/bgebyztw.json"
          trigger="loop"
          stroke="bold"
          colors="primary:#109121,secondary:#66ee78"
          style={{ width: 50 + "px", height: 50 + "px", position: "relative", top: 10 + "px", zIndex: -10, }}>
        </lord-icon>
      </div>
      <SectionAbout />
      <footer>
    <a className='text-slate-700' href="https://lordicon.com/">Animated icons by Lordicon.com</a>
    </footer>
    </div>
  )
}

export default About
