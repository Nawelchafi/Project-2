import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/NavBar"
import HomePage from './pages/HomePage/HomePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import AboutPage from './pages/AboutPage/AboutPage'
import CityPage from './pages/CityPage/CityPage'
import CityDetails from './pages/CityDetails/CityDetails'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import RestaurantDetailsPage from './pages/RestaurantDetailsPage/RestaurantDetailsPage'


function App() {
  // const [results, setResults] = useState([])
  return (
    <>
      <div className="App">
        <header>
          {/* <h1 className="text-3xl font-bold underline"></h1> */}
          <Navbar />
          {/* <SearchBar setResults={setResults}/> */}
          {/* <SearchResultsList /> */}
<div>
  Search results
</div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/city/:cityId" element={<CityDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants/:restaurantId" element={<RestaurantDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

    </>
  )
}

export default App
