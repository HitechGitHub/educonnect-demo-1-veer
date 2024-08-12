"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import "./dash.css";

const CardHolder = () => {
  const [dashMode, setDashMode] = useState("normal");

  const fetched = useSelector((data) => data.card.value.processed);

  const urls = fetched?.chapters?.map((elem) =>
    elem.toLowerCase().replace(/ /g, "-")
  ) || [];

  const [zenData, setZenData] = useState([
    {
      title: "webpage",
      work: "go-to-the-webpage",
      urlZen: `/subject/subs/keyword/`,
    },
    {
      title: "resources",
      work: "go-to-the-resources",
      urlZen: `/subject/subs/keyword/resources/page.js`,
    },
    {
      title: "notes",
      work: "go-to-the-notes",
      urlZen: `/subject/subs/keyword/notes/page.js`,
    },
    {
      title: "canva",
      work: "go-to-the-canva",
      urlZen: `/subject/subs/keyword/canva/page.js`,
    },
  ]);

  const handleChapterClick = (index) => {
    setDashMode("zen");
    const updatedZenData = zenData.map((data) => ({
      ...data,
      urlZen: data.urlZen.replace("keyword", urls[index]),
    }));
    setZenData(updatedZenData);
  };

  return (
    <div className="text-white card-content overflow-y-scroll max-h-[500px] px-4 py-3 font-bold gap-3">
      {fetched?.chapters?.length > 0 && dashMode === "normal" ? (
        fetched.chapters.map((item, index) => (
          <React.Fragment key={index}>
            <div className="px-3 py-1 flex justify-center items-center text-center transition-all duration-200 md:hover:border-slate-500 md:hover:text-slate-500 md:hover:dark:text-green-400 md:hover:dark:border-green-600 md:hover:scale-105 border border-black dark:border-white text-black dark:text-white font-bold relative z-50 opacity-100">
              <Link
                href={`/subject/subs/${urls[index]}`}
                onClick={() => handleChapterClick(index)}
              >
                {item}
              </Link>
            </div>
            <br />
          </React.Fragment>
        ))
      ) : dashMode === "zen" ? (
        <div className="gap-3 flex flex-col">
          {zenData.map((item, index) => (
            <div
              key={index}
              onClick={() => console.log(item, "Item is clicked")}
              className="px-3 py-1 flex justify-center items-center text-center transition-all duration-200 md:hover:border-slate-500 md:hover:text-slate-500 md:hover:dark:text-green-400 md:hover:dark:border-green-600 md:hover:scale-105 border border-black dark:border-white text-black dark:text-white font-bold relative z-50 opacity-100"
            >
              <Link href={item.urlZen.toLowerCase()}>{item.title.toUpperCase()}</Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="uppercase text-black dark:text-slate-400">
          Nothing is selected
        </p>
      )}
    </div>
  );
};
export default CardHolder;