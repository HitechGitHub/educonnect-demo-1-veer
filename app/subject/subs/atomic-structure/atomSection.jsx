import React, { useEffect, useRef } from 'react';
import './atom.css';
import Ahead from './Ahead';
import Forward from './Forward';
// import protonTooltip from './atom.js'

const AtomSection = () => {
  // useEffect(() => {
  //   protonTooltip()
  // }, []);

  const tooltip = useRef(null);
  const tooltipN = useRef(null)
  const orbitRef = useRef(null)
  const electron1 = useRef(null)
  const electron2 = useRef(null)
  const orbitM = useRef(null)
  const eleRef = useRef(null)

  const handleMouseEnter = () => {
    if (tooltip.current) {
      tooltip.current.style.opacity = 1
      tooltip.current.style.transform = `translateY(${-15}px)`
      tooltip.current.style.visibility = "visible"

    }
  }

  const handleMouseLeave = () => {
    if (tooltip.current) {
      tooltip.current.style.opacity = 0
      tooltip.current.style.transform = `translateY(${0}px)`
      tooltip.current.style.visibility = "hidden"

    }
  }
  const handleMouseEnterN = () => {
    if (tooltipN.current) {
      tooltipN.current.style.opacity = 1
      tooltipN.current.style.transform = `translateY(${15}px)`
      tooltipN.current.style.visibility = "visible"

    }
  }

  const handleMouseLeaveN = () => {
    if (tooltipN.current) {
      tooltipN.current.style.opacity = 0
      tooltipN.current.style.transform = `translateY(${0}px)`
      tooltipN.current.style.visibility = "hidden"

    }
  }

  const handleMouseEnterO = () => {
    if (orbitRef.current) {
      orbitRef.current.style.opacity = 1
      orbitRef.current.style.visibility = "visible"
      orbitM.current.style.animation = "none"
      // electron2.current.style.animation = "none"

    }
  }

  const handleMouseLeaveO = () => {
    if (orbitRef.current) {
      orbitRef.current.style.opacity = 0
      orbitRef.current.style.visibility = "none"
      orbitM.current.style.animation = "rotate 2s linear infinite "
      // electron2.current.style.animation = "rotate 2s linear infinite "

    }
  }

  const handleMouseEnterE = () => {
    if (eleRef.current) {
      eleRef.current.style.opacity = 1
      eleRef.current.style.visibility = "visible"
      orbitM.current.style.animation = "none"
      orbitM.current.style.animation = "none"
    }
  }

  const handleMouseLeaveE = () => {
    if (eleRef.current) {
      eleRef.current.style.opacity = 0
      eleRef.current.style.visibility = "hidden"
      orbitM.current.style.animation = "rotate 2s linear infinite "
    }
  }



  return (
    <div>
      <section id="composition" className="text-gray-400 scroll-smooth w-[100vw] bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Composition of an Atom
              <br className="hidden lg:inline-block" />
              {/* readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
              An atom is composed of <span className="highlight">SUBMTOMIC      PARTICLES which are also known as fundamental particles. </span> They are elctrons, protons and neutrons.
            </p>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <svg className='relative ' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <g ref={orbitM} className="orbit">
                <circle onMouseEnter={handleMouseEnterO} onMouseLeave={handleMouseLeaveO} className='orbit' cx="100" cy="100" r="80" stroke="#61dafb" strokeWidth="4" fill="none" />
                <circle onMouseEnter={handleMouseEnterE} onMouseLeave={handleMouseLeaveE} ref={electron1} cx="180" cy="100" r="10" fill="#61dafb" />
                <circle onMouseEnter={handleMouseEnterE} onMouseLeave={handleMouseLeaveE} ref={electron2} cx="20" cy="100" r="10" fill="#61dafb" />
              </g>

              <g id="nucleus">
                <circle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="proton transition-all duration-200 md:hover:scale-105" cx="90" cy="90" r="10" fill="#ff6b6b" />
                <circle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="proton transition-all duration-200 md:hover:scale-105" cx="110" cy="90" r="10" fill="#ff6b6b" />

                <circle onMouseEnter={handleMouseEnterN} onMouseLeave={handleMouseLeaveN} className="neutron transition-all duration-200 md:hover:scale-105" cx="90" cy="110" r="10" fill="#4ecdc4" />
                <circle onMouseEnter={handleMouseEnterN} onMouseLeave={handleMouseLeaveN} className="neutron transition-all duration-200 md:hover:scale-105" cx="110" cy="110" r="10" fill="#4ecdc4" />
              </g>
            </svg>
            <div ref={tooltip} className='text-white proton-tooltip px-5 py-3 absolute top-[10%] border-8 border-[#e76f51] bg-[#f4a361aa] z-50'>
              <h1 className='text-orange-900 tracking-tighter text-3xl font-bold uppercase'>protons</h1>
              <p className="text-slate-900 text-left leading-relaxed">Protons are the positively charged subatomic particles which contains one unit mass. It constitutes the mass of the nuclues and it makes the atom stable. The proton cancels out electron's charges that's why an atom is neutral.</p>
            </div>
            <div ref={tooltipN} className='text-white neutron-tooltip px-5 py-3 absolute top-[60%] border-8 border-[#00b4d8] bg-[#7ae9ffa5] z-50'>
              <h1 className='text-blue-900 tracking-tighter text-3xl font-bold uppercase'>neutron</h1>
              <p className="text-slate-900 text-left leading-relaxed transition-all duration-200">Neutron are neutral i.e They don't have a charge. They are havinh one unit mass which contributes in the atomic mass.</p>
            </div>
            <div ref={orbitRef} className='text-white left-[10%] w-full orbit-tooltip px-5 py-3 absolute top-[0%] border-8 border-[#00b4d8] bg-[#7ae9ffa5] z-50'>
              <h1 className='text-blue-900 tracking-tighter text-3xl font-bold uppercase'>orbit / energy levels / shells</h1>
              <p className="text-slate-900 text-left leading-relaxed transition-all duration-200">Protons are the positively charged subatomic particles which contains one unit mass. It constitutes the mass of the nuclues and it makes the atom stable. The proton cancels out electron's charges that's why an atom is neutral.</p>
            </div>
            <div ref={eleRef} className='text-white left-[10%] w-full electron-tooltip px-5 py-3 absolute top-[0%] border-8 border-[#fb5607] bg-[#ffdb25ac] z-50'>
              <h1 className='text-blue-900 tracking-tighter text-3xl font-bold uppercase'>Electrons</h1>
              <p className="text-slate-900 text-left leading-relaxed transition-all duration-200">Electrons are negatively charged particles which are having negligible mass, thus they DO NOT CONTRIBUTE in the atomic mass of an atom. Electrons take part in all of the chemical reactions so a change in the number of electrons will make atoms differently react.</p>
            </div>
          </div>
        </div>
      </section>



      <section class="text-gray-400 block lg:hidden bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Composition Of An
            <br class="hidden sm:block" /> Atom
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4 flex-shrink-0">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="#802929" stroke-width="3" fill="#FF4C4C" />
                  <line x1="20" y1="10" x2="20" y2="30" stroke="#802929" stroke-width="3" />
                  <line x1="10" y1="20" x2="30" y2="20" stroke="#802929" stroke-width="3" />
                </svg>

              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-white text-lg title-font font-medium mb-2">Proton</h2>
                <p class="leading-relaxed text-base">Protons are the positively charged subatomic particles which contains one unit mass. It constitutes the mass of the nuclues and it makes the atom stable. The proton cancels out electron's charges that's why an atom is neutral.</p>
                <a href="https://en.wikipedia.org/wiki/Proton" target='_blank' class="mt-3 text-orange-400 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4 flex-shrink-0">
                <svg width="40" height="40" stroke='#3D3D3D' xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="#3D3D3D" stroke-width="3" fill="#808080" />
                  <circle cx="20" cy="20" r="6" stroke="#3D3D3D" stroke-width="2" fill="#808080" />
                </svg>
              </div>
              <div class="flex-grow  pl-6">
                <h2 class="text-white text-lg title-font font-medium mb-2">Neutrons</h2>
                <p class="leading-relaxed text-base">Neutron are neutral i.e They don't have a charge. They are havinh one unit mass which contributes in the atomic mass.</p>
                <a href='https://en.wikipedia.org/wiki/Neutron' target='_blank' class="mt-3 text-gray-600 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4 flex-shrink-0">
                <svg width="40" height="40" stroke='#2A3599' xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="#2A3599" stroke-width="3" fill="#4C6FFF" />
                  <line x1="10" y1="20" x2="30" y2="20" stroke="#2A3599" stroke-width="3" />
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-white text-lg title-font font-medium mb-2">Electrons</h2>
                <p class="leading-relaxed text-base">Electrons are negatively charged particles which are having negligible mass, thus they DO NOT CONTRIBUTE in the atomic mass of an atom. Electrons take part in all of the chemical reactions so a change in the number of electrons will make atoms differently react.</p>
                <a href="https://ro.wikipedia.org/wiki/Electron" traget="_blank" class="mt-3 text-yellow-400 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="text-gray-400 w-[100vw] bg-gray-900 body-font">
        <h1 className="capitalize text-4xl text-white  font-bold tracking-tighter text-center">Steps to draw an atom</h1>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">

            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="10" fill="none" stroke="white" stroke-width="2" />
                    <circle cx="12.5" cy="12.5" r="2" fill="white" />
                    <line x1="12.5" y1="12.5" x2="22.5" y2="12.5" stroke="white" stroke-width="2" stroke-dasharray="2,2" />
                  </svg>




                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 1</h2>
                  <p class="leading-relaxed">Draw a small circle of radius of 1cm which means a circle of 2cm.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none" />
                    <circle cx="12" cy="12" r="6" stroke="white" stroke-width="2" fill="none" />
                    <circle cx="12" cy="12" r="3" stroke="white" stroke-width="2" fill="none" />
                    <circle cx="12" cy="4" r="1" fill="white" />
                    <circle cx="12" cy="20" r="1" fill="white" />
                    <circle cx="4" cy="12" r="1" fill="white" />
                    <circle cx="20" cy="12" r="1" fill="white" />
                  </svg>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>
                  <p class="leading-relaxed">Write the atoms symbol, proton number and neutron number in the nuclues.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none" />
                    <circle cx="12" cy="12" r="6" stroke="white" stroke-width="2" fill="none" />
                    <circle cx="12" cy="12" r="3" stroke="white" stroke-width="2" fill="none" />

                    <line x1="11" y1="4" x2="13" y2="4" stroke="white" stroke-width="2" />
                    <line x1="11" y1="20" x2="13" y2="20" stroke="white" stroke-width="2" />
                    <line x1="4" y1="11" x2="4" y2="13" stroke="white" stroke-width="2" />
                    <line x1="20" y1="11" x2="20" y2="13" stroke="white" stroke-width="2" />
                  </svg>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>
                  <p class="leading-relaxed">Now make the orbits. The orbit should be at 0.5cm far from each other.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Electron represented by a "-" --> */}
                    <line x1="5" y1="12" x2="20" y2="12" stroke="white" stroke-width="2" />
                  </svg>

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 4</h2>
                  <p class="leading-relaxed">Now make the electrons. Make pair of two electrons which make your paper presentation beautiful.</p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>
                  <p class="leading-relaxed">Make sure you have enterd all the values correctly.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      <section className="text-gray-400   w-full bg-gray-900">
        <h1 className="font-bold text-white text-center capitalize text-4xl block mb-10">Terms to know</h1>
        <div className="card-container flex md:flex-row flex-col gap-10 px-20">
          <div className="card rounded-2xl bg-green-500 px-4 py-2  shadow-xl">
            <div className="card-body  text-black">
              <h2 className="card-title font-bold mb-2 text-2xl">Atomic Number</h2>
              <p className='text-green-950'>The number of protons or the number of electrons in called as Atomic Number. It is denoted by the letter 'Z'. It's formula is <span className="bg-[#34962d9b] px-1">Z = P<sup>+</sup> OR Z = E<sup>-</sup></span></p>

            </div>
          </div>

          <div className="card rounded-2xl bg-green-500 px-4 py-2  shadow-xl">
            <div className="card-body  text-black">
              <h2 className="card-title font-bold mb-2 text-2xl">Atomic Mass Number</h2>
              <p className='text-green-950'>The total number of protons and neutrons is called as atomic mass number. The reason why electrons are the not included in the atomic mass is that an electron has a mass of 1/1837 of an hydrogen atom which is negligible. It is denoted by the letter 'A'. It's formula is <span className="bg-[#34962d9b] px-1">A = P<sup>+</sup> + N<sup>o</sup></span></p>

            </div>
          </div>


          <div className="card rounded-2xl bg-green-500 px-4 py-5  shadow-xl">
            <div className="card-body  text-black">
              <h2 className="card-title font-bold mb-2 text-2xl">Electronic Configuration</h2>
              <p className='text-green-950'>The electronic Configuration is the placement of electrons across the shell/orbits/energy levels of an atom eg. [2,8,8,2]</p>

            </div>
          </div>
        </div>
      </section>



      {/* <div className="h-1 relative top-5 w-[90vw] box-border bg-slate-700"></div> */}

      <section class="text-gray-400 bg-gray-900 body-font">
        <h1 className="font-bold text-center capitalize text-4xl text-white pt-10">discovery of atom</h1>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.fikarnot.online/Encyc/2020/9/24/2_05_38_35_3_1_H@@IGHT_432_W@@IDTH_622.jpg" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Maharishi Kannada
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">Maharshi Kanada was one of the greatest Indian philosophers of the 6th century BCE. He was the first to suggest that matter is composed of very small indestructible particles called paramanu (param + anu). Param means ultimate and anu means particle. Nowadays, paramanu is called 'atom'. Maharshi Kanada said that one paramanu combines with another to form a new substance called anu, which is now called 'molecule'.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
            </div>
          </div>
        </div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Democritus
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">The Greek philosopher Democritus (460 BCE-370 BCE) said that everything is made up of minute particles called atomos, which is a Greek word and means indivisible. The word atom comes from this Greek word. The theories proposed by Maharshi Kanada, Democritus and some other scientists of ancient times were based on abstract thinking and not on experimentation.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.thefamouspeople.com/profiles/images/Democritus2.jpg" />
          </div>
        </div>


        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded" alt="hero" src="https://media.sciencephoto.com/image/c0334234/800wm/C0334234-John_Dalton,_English_Chemist.jpg" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">John Dalton
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">For about 2000 years, the atomic theory remained a mere speculation. It was John Dalton, an English school teacher, who proposed his atomic theory in 1808, based upon inferences drawn from experimental observations. This theory is known as Dalton's atomic theory.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
            </div>
          </div>
        </div>

        <div class="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-white mb-4">John Dalton's Atomic Theory</h2>
          <ul class="space-y-4">
            <li class="p-4 bg-[#e73333ad] border border-gray-600 rounded-lg shadow-sm hover:bg-[#ff6e6ead]">
              <div class="flex items-center mb-2">
                <span class="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center">1</span>
                <span class="ml-3 text-xl text-white font-semibold">Composition Of Matter</span>
              </div>
              <p class="ml-11 text-gray-900">He stated that all matter is made up of small particles called atoms which are indivisible</p>
            </li>
            <li class="p-4 bg-[#e73333ad] border border-gray-600 rounded-lg shadow-sm hover:bg-[#ff6e6ead]">
              <div class="flex items-center mb-2">
                <span class="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center">2</span>
                <span class="ml-3 text-xl text-white font-semibold">More About Atoms</span>
              </div>
              <p class="ml-11 text-gray-900">He stated that atoms cannot be created, destroyed or subdivided</p>
            </li>
            <li class="p-4 bg-[#e73333ad] border border-gray-600 rounded-lg shadow-sm hover:bg-[#ff6e6ead]">
              <div class="flex items-center mb-2">
                <span class="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center">3</span>
                <span class="ml-3 text-xl text-white font-semibold">About Atoms of Different Elements</span>
              </div>
              <p class="ml-11 text-gray-900">The atoms of an element are identical in all respects, but the atoms of one element are different from the atoms of any other element.</p>
            </li>
            <li class="p-4 bg-[#5fcc249a] border border-gray-600 rounded-lg shadow-sm hover:bg-[#82d15acc]">
              <div class="flex items-center mb-2">
                <span class="flex-shrink-0 w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center">4</span>
                <span class="ml-3 text-xl text-white font-semibold">Combining Of Atoms (Elements)</span>
              </div>
              <p class="ml-11 text-gray-900">The atoms of an element combine in small whole number ratios to form molecules of the element.</p>
            </li>
            <li class="p-4 bg-[#5fcc249a] border border-gray-600 rounded-lg shadow-sm hover:bg-[#82d15acc]">
              <div class="flex items-center mb-2">
                <span class="flex-shrink-0 w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center">4</span>
                <span class="ml-3 text-xl text-white font-semibold">Combining Of Atoms (Compounds)</span>
              </div>
              <p class="ml-11 text-gray-900">The atoms of one element combines with atoms of another element in simple while number-rations to form molecules of compounds</p>
            </li>
            <li class="p-4 bg-[#5fcc249a] border border-gray-600 rounded-lg shadow-sm hover:bg-[#82d15acc]">
              <div class="flex items-center mb-2">
                <span class="flex-shrink-0 w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center">4</span>
                <span class="ml-3 text-xl text-white font-semibold">Rearrangment Of Atoms</span>
              </div>
              <p class="ml-11 text-gray-900">In a chemical reaction, atoms are combined, separated or rearranged.</p>
            </li>
          </ul>
        </div>

        <h1 className="text-4xl text-white capitalize mt-14 text-center">Discovery of Subatomic particles</h1>

        <div className='flex flex-col gap-10'>
          <h2 className="text-3xl text-center font-bold capitalize mt-12 text-white">discovery of electrons</h2>

          <div className="flex gap-14 mt-5 justify-center items-center text-2xl">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mt-10">William Crookes</h2>
              <p className="mx-auto w-[40vw] mt-5  ">In 1879, Sir William Crookes performed an experiment to investigate electric discharge through gases. He designed a discharge tube called the Crookes' discharge tube (Fig. 4.1). When high-voltage electric current (about 10,000 V) was passed through the discharge tube containing a gas or air at a very low pressure (about 0.01-0.001 mm of mercury), Crookes found that the end of the tube opposite the cathode started glowing. This showed that some rays were produced from the cathode and had moved from the cathode to the anode causing the gas at low pressure to glow. He named these rays cathode rays.</p>
            </div>
            <div class="lg:max-w-lg lg:w-full h-[30%]  md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://th.bing.com/th/id/OIP.EsJ5F0HMtOADwHOTAa2rGAHaJZ?rs=1&pid=ImgDetMain" />
            </div>
          </div>
        </div>
        <div className="animationElectrode1 flex mt-10 items-center justify-center ">
          <div className="bg-slate-800 border-[10px] rounded-2xl border-slate-600 px-20 py-14">
            <div class="relative w-[400px] h-[150px] bg-gray-700 rounded-full border-4 border-gray-400 overflow-hidden">
              {/* <!-- Cathode --> */}
              <div class="absolute left-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

              {/* <!-- Anode --> */}
              <div class="absolute right-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

              {/* <!-- Electrons --> */}
              <div class="electron1 absolute top-[40%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              <div class="electron2 absolute top-[50%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              <div class="electron3 absolute top-[60%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div className="container flex items-center flex-col justify-center w-[80vw] mx-auto">
          <div className="flex gap-14 mt-5 justify-center items-center text-2xl">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mt-10">J.J Thomson</h2>
              <p className="mx-auto w-[40vw] mt-5 flex gap-3 flex-col ">In 1897, a British scientist JJ Thomson, while working on the properties and constituents of cathode rays, showed that these cathode rays consist of negatively charged particles called electrons, present in atoms of all the elements.
                rays.
                <span className="mt-5">
                  JJ Thomson performed many experiments using cathode Thomson's experiments and observations are as outlined below:
                </span>
              </p>
            </div>
            <div class="lg:max-w-lg lg:w-full h-[30%]  md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://img.lelivrescolaire.fr/physique-chimie-3e-2017/les-ions-dans-notre-quotidien/la-physique-chimie-autrement/3000.spc.t1.10.lpa.thomson.jpg" />
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <h2 className="text-left">He kept an object in the path of the cathode rays. He observed that a shadow of the object was formed at the end opposite to the cathode. This proves that cathode rays travel in a straight line and cast a shadow of the object placed in their path.</h2>
            <div class="flex items-center justify-center mt-10">
              <div class="bg-slate-800 border-[10px] rounded-2xl border-slate-600 px-20 py-14">
                <div class="relative w-[400px] h-[150px] bg-gray-700 rounded-full border-4 border-gray-400 overflow-hidden">
                  {/* <!-- Cathode --> */}
                  <div class="absolute left-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

                  {/* <!-- Anode --> */}
                  <div class="absolute right-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

                  {/* <!-- Object Casting Shadow --> */}
                  <div class="absolute top-[50%] left-[50%] w-[40px] h-[40px] bg-gray-600 rounded-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                  {/* <!-- Shadow --> */}
                  <div class="shadow"></div>



                  {/* <!-- Electrons --> */}
                  <div class="electron1 absolute top-[30%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                  <div class="electron2 absolute top-[50%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                  <div class="electron3 absolute top-[70%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="flex items-center flex-col justify-center mt-10">
          <h2 className="text-left w-[80vw] mb-10">He kept a light paddle wheel in the path of the cathode rays. He observed that the paddle wheel started rotating. From this, he concluded that the cathode rays consist of a stream of fast-moving particles </h2>
          <div class="bg-slate-800 border-[10px] rounded-2xl border-slate-600 px-20 py-14">
            <div class="relative w-[400px] h-[150px] bg-gray-700 rounded-full border-4 border-gray-400 overflow-hidden">
              {/* <!-- Cathode --> */}
              <div class="absolute left-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

              {/* <!-- Anode --> */}
              <div class="absolute right-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>



              {/* <!-- Paddle Wheel --> */}
              <div class="paddle-wheel"></div>

              {/* <!-- Electrons --> */}
              <div class="electron1 absolute top-[30%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              <div class="electron2 absolute top-[50%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              <div class="electron3 absolute top-[70%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div class=" items-center justify-center flex flex-col mt-10">
          <h2 className="text-left w-[80vw] mb-10">He applied an electric field in the path of the cathode rays. He observed that the cathode rays got deflected towards the positively charged plate. From this, he concluded that cathode rays are made up of negatively charged particles, called electrons.</h2>
          <div class="bg-slate-800 border-[10px] rounded-2xl border-slate-600 px-20 py-14">
            <div class="relative w-[400px] h-[150px] bg-gray-700 rounded-full border-4 border-gray-400 overflow-hidden">
              {/* <!-- Cathode --> */}
              <div class="absolute left-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

              {/* <!-- Anode --> */}
              <div class="absolute right-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>


              {/* <!-- Magnets --> */}
              <div class="magnet magnet-top plus"></div>
              <div class="magnet magnet-bottom minus"></div>

              {/* <!-- Electrons --> */}
              <div class="electron1m m absolute top-[30%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              <div class="electron2m m absolute top-[50%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
              <div class="electron3m m absolute top-[70%] w-[10px] h-[10px] bg-blue-500 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full flex flex-col items-center justify-center pt-10 bg-gray-900">
        {/* <h2 className="ml-20 text-white text-3xl">Properties of Electrons</h2> */}
        <div class="bg-gray-800 text-white shadow-lg rounded-lg p-8 max-w-[80vw] w-full">
          <h1 class="text-3xl font-bold text-center text-green-400 mb-6">✨ Properties of Electrons ✨</h1>
          <ul class="list-disc list-inside space-y-4">
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Definite Mass and Charge:</strong>
                <p>Electrons have a definite mass and a definite electric charge.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Independence from Gas and Cathode Material:</strong>
                <p>The nature of electrons is independent of the nature of the gas used in the discharge tube and the material of the cathode.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Negligible Mass:</strong>
                <p>Electrons have a negligible mass, approximately 9.1 × 10<sup>−28</sup> grams, which is about 1/1837 of the mass of the hydrogen atom (the lightest of all atoms).</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Charge:</strong>
                <p>An electron carries 1.602 × 10<sup>−19</sup> coulombs of negative charge, which is taken as one unit negative charge.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Notation:</strong>
                <p>Electrons are denoted by e<sup>−</sup> or e<sub>0</sub>, where −1 represents one unit of negative charge and 0 represents the mass.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full text-gray-400 pt-10 bg-gray-900">
        <h2 className="text-3xl text-center font-bold capitalize mt-12 text-white">discovery of protons</h2>
        <div className="flex gap-14 mt-5 justify-center items-center text-2xl">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-white mt-10">Eugen Goldstein</h2>
            <p className="mx-auto w-[40vw] mt-5  ">Goldstein performed an experiment by using a discharge tube (Fig. 4.5) containing a perforated cathode (cathode with small holes), so as to allow anode rays to pass through it. When a high voltage (about 10,000 V) of electric current was passed through this cathode and air inside the discharge tube kept at a very low pressure (about 0.001 mm of mercury), a faint red glow was observed behind the perforated cathode. This showed that some rays were produced from the anode and moved from the anode to the cathode causing the glow behind the cathode. He named these rays anode rays, containing particles now called protons.</p>
          </div>
          <div class="lg:max-w-lg lg:w-full h-[30%]  md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.lifeder.com/wp-content/uploads/2018/02/retrato-Eugen-Golstein-bio-min.jpg" />
          </div>

        </div>
        <div className="flex items-center justify-center w-[100vw] ">
          <div class="bg-slate-800 border-[10px] w-[40vw] mt-10 rounded-2xl border-slate-600 px-20 py-12 flex items-center justify-center">
            <div class="relative w-[400px] h-[150px] bg-gray-700 rounded-full border-4 border-gray-400 overflow-hidden">
              {/* <!-- Cathode --> */}
              <div class="absolute left-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

              {/* <!-- Anode --> */}
              <div class="absolute right-0 top-1/2 w-[40px] h-[10px] bg-white transform -translate-y-1/2"></div>

              {/* <!-- Magnets --> */}
              <div class="magnet magnet-top plus"></div>
              <div class="magnet magnet-bottom minus"></div>

              {/* <!-- Protons --> */}
              <div class="protonM absolute top-[30%] left-[10%] w-[10px] h-[10px] bg-red-500 rounded-full transform -translate-y-1/2 protonM"></div>
              <div class="protonM absolute top-[50%] left-[20%] w-[10px] h-[10px] bg-red-500 rounded-full transform -translate-y-1/2 protonM"></div>
              <div class="protonM absolute top-[70%] left-[30%] w-[10px] h-[10px] bg-red-500 rounded-full transform -translate-y-1/2 protonM"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div class="bg-gray-800 border border-gray-600 dark:border-gray-700 mt-10 rounded-lg p-8 max-w-full w-[80vw]">
            <h1 class="text-3xl font-bold text-green-400 mb-6 text-center">🌟 Properties of Protons 🌟</h1>
            <ul class="list-disc list-inside space-y-4">
              <li class="flex items-start">
                <span class="text-green-400 text-xl mr-2">🔹</span>
                <div>
                  <strong class="text-green-300">Mass:</strong>
                  <p>A proton has the same mass as a hydrogen atom, approximately 1.6 × 10<sup>−24</sup> grams. This means the mass of a proton is about 1837 times that of an electron.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 text-xl mr-2">🔹</span>
                <div>
                  <strong class="text-green-300">Charge:</strong>
                  <p>A proton has an equal and opposite charge compared to an electron. It carries 1.602 × 10<sup>−19</sup> coulombs of positive charge, which is considered one unit positive charge.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-400 text-xl mr-2">🔹</span>
                <div>
                  <strong class="text-green-300">Notation:</strong>
                  <p>Protons are denoted by p<sup>+</sup> or p<sub>+</sub>, where +1 represents one unit of positive charge and 1 atomic mass unit (amu) is the mass.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center text-gray-400 pt-10 bg-gray-900">
        <h1 className="text-3xl capitalize text-white text-center font-bold">Discovery of neutrons</h1>
        <div className="container">
          <h2 className="text-3xl text-center font-bold capitalize mt-12 text-white">discovery of protons</h2>
          <div className="flex gap-14 mt-5 justify-center items-center text-2xl">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mt-10">James Chadwick</h2>
              <p className="mx-auto w-[40vw] mt-5  ">For several years, electrons and protons were the only two known subatomic particles. If an atom consisted of only electrons and protons, then the mass of the atom should be equal to the total mass of the protons present in it, since the mass of the electrons is negligible. However, it was found that the mass of an atom was much higher than the total mass of the protons present in the atom.
                In 1932, James Chadwick solved this problem with the discovery of the new subatomic particle, known as neutron.</p>
            </div>
            <div class="lg:max-w-lg lg:w-full h-[30%]  md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://th.bing.com/th/id/OIP.RWxti7VafgZDnOd263os1QHaKe?rs=1&pid=ImgDetMain" />
            </div>
          </div>
        </div>
        <div class="bg-gray-800 border border-gray-600 dark:border-gray-700 mt-10 rounded-lg p-8 mx-auto max-w-full w-[80vw]">
          <h1 class="text-3xl font-bold text-green-400 mb-6 text-center">🌟 Properties of Neutrons 🌟</h1>
          <ul class="list-disc list-inside space-y-4">
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Mass:</strong>
                <p>The mass of a neutron is nearly equal to that of a proton, that is, 1.6 × 10<sup>−24</sup> grams.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Charge:</strong>
                <p>A neutron carries no charge, that is, it is a neutral particle.</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 text-xl mr-2">🔹</span>
              <div>
                <strong class="text-green-300">Notation:</strong>
                <p>Neutrons are denoted by n or n<sub>0</sub>, where 0 represents no charge and 1 amu represents the mass.</p>
              </div>
            </li>
          </ul>
        </div>


        <div className="container mb-10">
          <h2 className="text-3xl text-center font-bold capitalize mt-12 text-white">discovery of nuclues</h2>
          <div className="flex gap-14 mt-5 justify-center items-center text-2xl">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mt-10">Sir Ernest Rutherford</h2>
              <p className="mx-auto w-[40vw] mt-5  ">In 1911, a British physicist, Lord Ernest Rutherford, performed
                a scattering experiment to describe the structure of an atom. In his experiment, he bombarded a thin sheet of gold foil (0.00004 cm thick) with fast-moving positively charged particles called alpha particles (a). Alpha particles are formed by the removal of electrons from helium and are thus positively charged. Figure 4.7 shows Lord Ernest Rutherford's experiment.</p>
            </div>
            <div class="lg:max-w-lg lg:w-full h-[30%]  md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://th.bing.com/th/id/OIP.O2h7U_QyPMha5umirS569QHaJ7?rs=1&pid=ImgDetMain" />
            </div>
          </div>
        </div>

        
        <div className="flex w-[100%] gap-5 items-center justify-center">

          <div className="flex-col gap-3 flex">
            <h1 className="text-3xl text-white font-bold text-center">Rutherford's Experiment's Outcome</h1>
            <div class="relative w-[600px] h-[400px]  bg-gray-800 rounded-lg flex items-center overflow-hidden">
              <div class="absolute top-2 left-4 text-sm text-gray-200 font-bold">Alpha Particles</div>
              <div class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-200 font-bold">Gold Foil</div>
              <div class="absolute top-2 right-4 text-sm text-gray-200 font-bold">Nucleus</div>
              <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-200 font-semibold">Rutherford's Gold Foil Experiment</div>

              <div class="gold-foil absolute w-2 h-full bg-yellow-400 left-1/2 transform -translate-x-1/2"></div>

              <div class="alpha-particle large-deflect absolute w-4 h-4 bg-red-500 rounded-full left-4"></div>
              <div class="alpha-particle upper-deflect absolute w-4 h-4 bg-red-500 rounded-full  top-[43%]"></div>
              <div class="alpha-particle reverse-deflect absolute w-4 h-4 bg-red-500 rounded-full top-[57%]"></div>
              <div class="alpha-particle deflect absolute w-4 h-4 bg-red-500 rounded-full left-4 top-[38%]"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full left-4 top-2/3"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full left-4 bottom-1/4"></div>

              <div class="nucleus absolute w-16 h-16 bg-blue-500 text-white text-center leading-[4rem] text-xl font-bold rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">+</div>
            </div>
          </div>

          <div className="flex gap-3 flex-col">
            <h1 className="text-3xl text-white font-bold text-center">Rutherford's Experiment's Expectations</h1>

            <div class="relative w-[600px] h-[400px] bg-gray-800 rounded-lg flex items-center overflow-hidden">
              <div class="absolute top-2 left-4 text-sm text-gray-200 font-bold">Alpha Particles</div>
              <div class="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-200 font-bold">Gold Foil</div>
              <div class="absolute top-2 right-4 text-sm text-gray-200 font-bold">Nucleus</div>
              <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-200 font-semibold">Rutherford's Gold Foil Experiment</div>

              <div class="gold-foil absolute w-2 h-full bg-yellow-400 left-1/2 transform -translate-x-1/2"></div>

              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full left-4"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full  top-1/3"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full top-3/4"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full left-4 top-3/6"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full left-4 top-4/6"></div>
              <div class="alpha-particle straight absolute w-4 h-4 bg-red-500 rounded-full left-4 bottom-5/6"></div>

            </div>
          </div>
        </div>



        <svg xmlns="http://www.w3.org/2000/svg" className='mt-10' viewBox="0 0 600 400" width="600" height="400">
          <rect width="100%" height="100%" fill="#1e293b" />

          <rect x="280" y="50" width="40" height="300" fill="#FFD700" stroke="#DAA520" stroke-width="2" />
          <text x="300" y="40" font-size="14" fill="#ffffff" text-anchor="middle" font-family="Arial, sans-serif">Gold Foil</text>

          <circle cx="300" cy="200" r="20" fill="#4169E1" stroke="#27408B" stroke-width="2" />
          <text x="300" y="205" font-size="16" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">+</text>
          <text x="300" y="230" font-size="14" fill="#333" text-anchor="middle" font-family="Arial, sans-serif">Nucleus</text>

          <circle cx="100" cy="70" r="6" fill="#FF6347" />
          <circle cx="100" cy="200" r="6" fill="#FF6347" />
          <circle cx="100" cy="330" r="6" fill="#FF6347" />

          <line x1="100" y1="70" x2="280" y2="70" stroke="#FF6347" stroke-width="2" />
          <line x1="100" y1="200" x2="280" y2="200" stroke="#FF6347" stroke-width="2" />
          <line x1="100" y1="330" x2="280" y2="330" stroke="#FF6347" stroke-width="2" />

          <line x1="320" y1="70" x2="500" y2="40" stroke="#FF6347" stroke-width="2" stroke-dasharray="4,4" />
          <line x1="320" y1="200" x2="500" y2="200" stroke="#FF6347" stroke-width="2" />
          <line x1="320" y1="330" x2="500" y2="370" stroke="#FF6347" stroke-width="2" stroke-dasharray="4,4" />

          <text x="100" y="50" font-size="14" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">Alpha Particle</text>
          <text x="500" y="30" font-size="14" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">Deflected Path</text>
          <text x="500" y="380" font-size="14" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">Deflected Path</text>
          <text x="500" y="220" font-size="14" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">Straight Path</text>
        </svg>

        {/* </div> */}
        <Ahead/>

      </section >


      <section className="w-[100vw] flex flex-col items-center justify-center bg-gray-900 pt-10 text-gray-400">
        <h1 className="text-4xl text-white font-bold capitalize text-center mt-5 mb-5">Atomic Models</h1>
        <div className="jj flex items-center w-[100%] gap-10 px-14 py-10">
          <div className="text-jj w-[60%] ">
            <h2 className="text-3xl text-white font-bold text-left mb-5 tracking-tigher capitalize">Thomson's plum pudding model</h2>
            <p className="text-gray-400 text-left leading-relaxed mt-3">
              In 1904, Thomson proposed the first atomic model, called the plum-pudding model (Fig. 4.6), in which only electrons and protons were present. According to this model, an atom has a uniform positively charged spherical cloud with negatively charged particles (electrons) embedded in it. The electrons move through the atmosphere of positive charge just like the dry fruits or plums in a plum pudding. Therefore, he named his model the
              about the atom and thus it was not accepted.
            </p>

          </div>
          <div className="animationPLumModel">
            <div class="relative w-72 h-72 bg-orange-200 ml-10 rounded-full flex justify-center items-center">

              <div class="jj-proton absolute w-10 h-10 bg-red-500 top-[20%] left-[20%] text-white text-xl flex justify-center items-center rounded-full" >+</div>
              <div class="jj-proton absolute w-10 h-10 bg-red-500 top-[20%] right-[20%] text-white text-xl flex justify-center items-center rounded-full" >+</div>
              <div class="jj-proton absolute w-10 h-10 bg-red-500 bottom-[20%] left-[20%] text-white text-xl flex justify-center items-center rounded-full" >+</div>
              <div class="jj-proton absolute w-10 h-10 bg-red-500 bottom-[20%] right-[20%]  text-white text-xl flex justify-center items-center rounded-full" >+</div>


              <div class="jj-electron absolute w-8 h-8 bg-blue-500 text-white text-lg flex justify-center items-center rounded-full animate-[move_4s_infinite_linear]">−</div>
              <div class="jj-electron absolute w-8 h-8 bg-blue-500 text-white text-lg flex justify-center items-center rounded-full animate-[move_4s_infinite_linear] jj-electron2">−</div>
              <div class="jj-electron absolute w-8 h-8 bg-blue-500 text-white text-lg flex justify-center items-center rounded-full animate-[move_4s_infinite_linear] jj-electron3">−</div>
              <div class="jj-electron absolute w-8 h-8 bg-blue-500 text-white text-lg flex justify-center items-center rounded-full animate-[move_4s_infinite_linear] jj-electron4">−</div>
            </div>
          </div>

        </div>
      </section>
        <Forward/>
    </div >
  );
};

export default AtomSection;


