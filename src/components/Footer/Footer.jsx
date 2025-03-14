import React from 'react'

export default function Footer() {
  return (
    <>


<footer className="bg-teal-900 text-white dark:bg-gray-900 ">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-center ">
  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 py-10">
        <div>
          <h1 className="mb-3 text-3xl font-semibold  ">LOCATION</h1>
          <h3 className='mb-3 font-semibold'>2215 John Daniel Drive</h3>
          <h3>Clark, MO 65243</h3>
        </div>
        <div>
          <h1 className="mb-3 text-3xl font-semibold  ">AROUND THE WEB</h1>
          <div className='gap-4 flex justify-center items-center my-4'>
          <i className="fa-brands fa-facebook"></i>       
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin-in" />
          <i className="fa-solid fa-globe " />
          </div>
        </div>
        <div>
          <h1 className="mb-3 text-3xl font-semibold  ">ABOUT FREELANCER</h1>
          <h3 className='mb-3 font-semibold'>2Freelance is a free to use, licensed Bootstrap theme created by Route</h3>
        </div>
  </div>
  </div>
  <div>
    <p className='text-center bg-teal-950 py-5'>Copyright © Your Website 2021</p>
  </div>
</footer>


    </>
  )
}
