import React from 'react'
import photo1 from '../../assets/poert1.png'
import photo2 from '../../assets/port2.png'
import photo3 from '../../assets/port3.png'

export default function Portfolio() {

  return (
    <>
    <div className='text-gray-900  m-auto text-center '>

      <h1 className='text-5xl font-bold my-5'>PORTFOLIO COMPONENT</h1>
      <h1 className='font-bold text-3xl my-5'>ــــــــــــ <i _ngcontent-ppm-c6 className="fa-solid fa-star" /> ــــــــــــ </h1>
      
      <div className='flex flex-wrap justify-center gap-5 my-5'>
      <img src={photo1} className='w-96 rounded-md' alt="" />
      <img src={photo2} className='w-96 rounded-md' alt="" />
      <img src={photo3} className='w-96 rounded-md' alt="" />
      <img src={photo1} className='w-96 rounded-md' alt="" />
      <img src={photo2} className='w-96 rounded-md' alt="" />
      <img src={photo3} className='w-96 rounded-md' alt="" />


    </div>
    </div>


    </>
  )
}
