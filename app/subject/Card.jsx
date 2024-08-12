"use client"

import { useSelector, useDispatch } from 'react-redux'
import { change } from "../redux/card/cardSlice.js"
import { useState } from 'react'
import "./card.css"


const Card = (props) => {
  const [subject, setSubject] = useState(props.title);

  const dispatch = useDispatch()

  const fetched = useSelector((data) =>
    data.card.value.name
  )

  const fetchedSubject = useSelector((data) => data.card.value.subject)
  const fetchedArray = useSelector((subjectObj) => subjectObj.card)

  const userDispatch = () => {
    dispatch(change(props.title))
  }


  return (
    <div>
      <div className="card  dark:bg-slate-800 border-gray-400 dark:border-black border-2 flex flex-col items-center text-black dark:text-white p-4 rounded-md  h-fit">
        <img className="w-[30vw] max-w-[130px] h-[30vw] max-h-[130px] object-contain"
          src={props.props}
          alt="this is an mg" />
        <p className="inline-block text-center uppercase font-bold text-[105%]">{props.title}</p>
        <button onClick={
          () => {
            setSubject(props.title)
            userDispatch()
          }
        } className='buttonCard flex gap-1 items-center justify-center bg-slate-400 dark:bg-slate-700 mt-6 rounded-full px-5 md:hover:scale-125 md:hover:text-white md:hover:bg-slate-500 md:hover:dark:bg-slate-600 transition-all duration-200 py-2 font-bold'>
          <div className="txt">
            Let{"'"}s <span className="text-slate-600 dark:text-green-500">GO</span>
          </div>
          {/* <div className="imgBtn">
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/wuvorxbv.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#109121,secondary:#66ee78"
              style={{ width: 20 + "px", height: 20 + "px", position: "relative", top: "3px", strokeWidth: 5 + "px"}}>
            </lord-icon>
          </div> */}
        </button>
      </div>
    </div>
  )
}

export default Card

