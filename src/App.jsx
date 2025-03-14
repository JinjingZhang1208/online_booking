import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
    
    </div>
  )
}

export default App
