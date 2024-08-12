"use client"
import callClick from "./components/scriptMode";
export default function Home() {
  return (
    <main >
      <div className="overflow-hidden">
      <div className="hidden">Hello</div>
      {/* <hr className='h-[3px] mt-32 bg-slate-800 border-3 border-slate-800 mb-5' /> */}
        <section className="hero relative mt-32 -z-50">
            <div className="hero flex relative justify-center items-center">
              <div className="flex flex-col items-center justify-center absolute opacity-100 w-[60%] -z-10">
                <p className="hero-h1 h1 w-[160%] ml-2 right-0 left-0 text-black dark:text-slate-100 md:text-black md:text-3xl font-bold text-center">The Best Online Learning
                  Platform For You.</p>
                <p className="hero text-[25px] right-0 left-0 mt-2 text-black font-semibold dark:text-slate-100 md:block hidden text-center">A platform where you can
                  find everything in one place.</p>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/003/019/310/large_2x/young-girl-studying-at-her-room-concept-free-vector.jpg" className=" -z-40 h-[80%] rounded-full w-[80%] opacity-50" />
            </div>
          </section>
  
          <div className="diff text-center text-[20px] dark:text-white">
            “Master New Skills At Your Own Pace By Online Education”.
          </div>
          
      </div>
    </main>
  );
}
