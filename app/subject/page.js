"use client"
import React from 'react'
import Dashboard from "./Dashboard.jsx";
import Card from "./Card.jsx";

const Subject = () => {

  return (
    <div>
      <div className='mt-32 md:mt-0'>
      <Dashboard />

      <div className="card-containe mt-4 gap-3 md:mt-32 md:pl-52 grid grid-cols-3 md:grid-cols-2 md:justify-items-end md:*:mr-4 md:*:w-[50%]  grid-rows-3">
        <Card props={"https://cdn-icons-png.flaticon.com/512/12207/12207598.png"} title="physics" />
        <Card  props={"https://cdn-icons-png.flaticon.com/512/5360/5360987.png"} title="chemistry" />
        <Card props={"https://cdn1.iconfinder.com/data/icons/genetics-and-bioengineering-filled-outline/64/genetical-dna_structure-deoxyribonucleic_acid-biology-dna-education-science-medical-test-512.png"} title="biology" />
        <Card  props={"https://uxwing.com/wp-content/themes/uxwing/download/education-school/geography-icon.png"} title="geography" />
        <Card props={"https://clipground.com/images/a-clipart-history-9.png"} title="history" />
        <Card  props={"https://cdn4.iconfinder.com/data/icons/alphabet-33/512/43.Alphabet-512.png"} title="english language" />
        <Card props={"https://th.bing.com/th/id/R.91d807329ca314a8f6561a7eb5a51402?rik=%2fU6AhaI0j1umuw&riu=http%3a%2f%2fclipartsign.com%2fupload%2f2015%2f12%2f02%2fcute-book-clip-art-clipart.gif&ehk=mLv8%2fZhICYYHMU6YwoJFNxcoYR4qt2NvSmotqEd1Hko%3d&risl=&pid=ImgRaw&r=0"} title="literature in english" />
        <Card  props={"https://infinitemlmsoftware.com/blog/wp-content/uploads/2024/02/calculator.png"} title="maths" />
      </div>
    </div>
    </div>
  )
}

export default Subject
