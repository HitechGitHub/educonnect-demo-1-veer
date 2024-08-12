"use client"
import React from 'react'
import callClick from './scriptMode'

const BtnDark = () => {
  return (
    <div>
      <div className="flex place-items-end">
        <div onClick={()=>{callClick()}} className="absolute right-0 toggleMode top-20 opacity-65 px-5 py-2 bg-slate-800 rounded-b-lg text-white">{">"}</div>
      </div>
    </div>
  )
}

export default BtnDark;
