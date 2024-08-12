import React from 'react'

const Forward = () => {
  return (
    <div>
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
    </div>
  )
}

export default Forward
