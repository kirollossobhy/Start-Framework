
import React from 'react'
import img from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className='bg-green-400  text-white h-lvh flex flex-col justify-center items-center'>
      <img src={img} className='w-96 ' alt="" />
      <div className='text-center'>
        <h1 className='text-5xl font-bold my-5'>START FRAMEWORK</h1>
        <h1 className='font-bold text-3xl my-5'>ــــــــــــ <i _ngcontent-ppm-c6 className="fa-solid fa-star" /> ــــــــــــ </h1>
        <h1>Graphic Artist - Web Designer - Illustrator</h1>
      </div>
    </div>
    </>
  )
}   
