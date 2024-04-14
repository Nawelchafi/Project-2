import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import RestaurantPage from './pages/RestaurantPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header>

          <div>
            <h1>FLAVERFINDS</h1>



            <NavBar />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurant:/restaurantId" element={<RestaurantPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

    </>
  )
}

export default App