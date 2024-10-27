import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Magazines from './components/Magazines'
import Magazine from './magazines/Magazine'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazines" element={authUser?<Magazine />:<Navigate to='/signup'/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App
