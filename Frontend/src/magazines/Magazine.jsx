import React from 'react'
import Navbar from '../components/Navbar'
import Magazines from '../components/Magazines'
import Footer from '../components/Footer'

function Magazine() {
  return (
    <>
    <Navbar />
   <div className='min-h-screen'>
   <Magazines /> 
   </div>
    <Footer />
    </>
  )
}

export default Magazine