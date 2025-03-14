import { Profiler, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Notfound from './components/NotFound/Notfound'
import Home from './components/Home/Home'
import Layout from './components/layOut/Layout'

function App() {

   const routes = createBrowserRouter([
    {path:"", element:<Layout/>, children: [
      {index:true,element:<Home/>},
      {path:"about", element:<About/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"contact", element:<Contact/>},
      {path:"*", element:<Notfound/>},

    ]}
  ])

  return (
    <>  
    <RouterProvider router={routes} />
    </>
  )
}

export default App
