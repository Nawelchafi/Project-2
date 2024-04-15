import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import RestaurantPage from './pages/RestaurantPage'
import Login from './pages/Login/Login'
import Singup from './pages/Signup/Singup'


function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurant:/restaurantId" element={<RestaurantPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

    </>
  )
}

export default App
