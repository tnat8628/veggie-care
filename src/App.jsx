import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import PasswordRecovery from './components/auth/PasswordRecovery'
import PasswordRecoverySuccess from './components/auth/PasswordRecoverySuccess'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'


function App() {

  return(
    <>
      <main>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/veggie-care' element={<Home/>} />
            <Route path='/dang-nhap' element={<Login/>} />
            <Route path='/khoi-phuc-mat-khau' element={<PasswordRecovery/>} />
            <Route path='/password-recovery-success' element={<PasswordRecoverySuccess/>} />
          </Routes>
          <Footer/>
        </Router>
      </main>
    </>
  )
}

export default App
