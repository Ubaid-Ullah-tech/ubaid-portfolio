import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Certification from './components/certification/Certification'
import About from './components/aboutt/About'
import Contact from './components/contactt/Contact'
const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Layout/>}>
        <Route path='/certification' element={<Certification/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
