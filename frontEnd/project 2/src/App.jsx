import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
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
            <h1>PROJECT2</h1>

            <NavigationBar />
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
