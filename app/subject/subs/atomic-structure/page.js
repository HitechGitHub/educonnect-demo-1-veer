"use client";
import React from "react";
import Title from "@/app/components/Title";
import "../../../globals.css";
import AtomSection from "./atomSection";

const AtomicStructure = () => {
  return (
    <div
      className="mt-24 flex flex-col 
    items-center scroll-smooth"
    >
      <Title
        className="bg-green-800"
        color="white"
        textSize={40 + "px"}
        heading={"4. Atomic Structure"}
      />

      <section className="dark:text-gray-400 dark:bg-gray-900  *:overflow-x-hidden body-font w-[100vw] overflow-x-hidden">
        <div className="container mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              fill="#fffafa"
              stroke="#fffafa"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>atom [#ffffff]</title> <desc></desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="0.2"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-220.000000, -2399.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M180.407706,2250.77619 C178.984549,2252.60108 177.496521,2254.0618 175.773962,2255.40378 C177.201111,2256.22793 180.549423,2257.72157 181.634256,2256.63701 C182.374777,2255.89667 182.034457,2253.58088 180.407706,2250.77619 M174.001503,2254.25137 C175.983544,2252.80163 177.797919,2250.98771 179.247025,2249.00617 C177.803907,2247.03161 175.99053,2245.21569 174.001503,2243.76096 C172.00549,2245.21968 170.195106,2247.03759 168.754982,2249.00617 C170.204088,2250.98871 172.019462,2252.80163 174.001503,2254.25137 M172.228045,2255.40378 C170.501494,2254.05781 169.013466,2252.59709 167.594301,2250.77619 C165.96755,2253.58088 165.62723,2255.89667 166.367751,2256.63701 C167.442604,2257.71059 170.761973,2256.25187 172.228045,2255.40378 M167.594301,2247.23615 C169.01646,2245.41125 170.504488,2243.95153 172.228045,2242.60855 C170.802892,2241.78441 167.453582,2240.28977 166.367751,2241.37533 C165.62723,2242.11566 165.96755,2244.43146 167.594301,2247.23615 M175.773962,2242.60855 C177.500513,2243.95353 178.987543,2245.41424 180.407706,2247.23615 C184.018494,2241.00915 181.287948,2239.42172 175.773962,2242.60855 M181.664197,2249.00617 C187.098342,2257.49707 182.427671,2262.0648 174.001503,2256.67392 C165.595294,2262.05183 160.885701,2257.52501 166.338809,2249.00617 C160.941589,2240.57413 165.492499,2235.89465 174.001503,2241.33841 C182.424677,2235.94953 187.103332,2240.50828 181.664197,2249.00617 M175.065378,2247.94555 C175.649211,2248.53024 175.649211,2249.47811 175.065378,2250.06179 C174.480546,2250.64648 173.53244,2250.64648 172.947608,2250.06179 C172.362776,2249.47811 172.362776,2248.53024 172.947608,2247.94555 C173.53244,2247.36087 174.480546,2247.36087 175.065378,2247.94555"
                        id="atom-[#ffffff]"
                        strokeWidth="0.5"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-medium capitalize text-white">
              intoduction to an atom
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              An atom is the smallest unit of matter that retains the properties
              of an element. It consists of a central nucleus, made up of
              protons and neutrons, and a surrounding cloud of negatively
              charged electrons. The number of protons in the nucleus determines
              the element, while the arrangement of electrons influences its
              chemical behavior.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <a href="#composition">Composition</a>
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                <a href="discovery">Discovery</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Intro section */}
      <section class="text-gray-400 w-[100vw] bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap items-center  -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-7 bg-[#2E293F] flex flex-col md:flex-row items-center py-5 rounded-lg">
              
              <div className="bg-[#2E293F]">
              <h2 class="title-font text-left text-2xl font-medium text-white mt-6 mb-3">
                What We Will Learn
              </h2>
              <div class="leading-relaxed text-base">
                <ul className="list-disc text-left">
                  <li>What is an atom?</li>
                  <li>What is atom composed of?</li>
                  <li>Who discovered atom?</li>
                </ul>
              </div>
              </div>
              {/* <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Button</button> */}
            </div>
            <div class="sm:w-1/2  mb-10 px-6">
              
              <h2 class="title-font imp text-2xl font-medium text-white text-left mt-6 mb-3">
                What is an ATOM?
              </h2>
              <p class="leading-relaxed  x-auto mt-6 text-left border-0 py-2 text-slate-400 focus:outline-none  rounded">
              An atom is the smallest unit of matter that retains the properties of an element.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AtomSection/>
    </div>
  );
};

export default AtomicStructure;
