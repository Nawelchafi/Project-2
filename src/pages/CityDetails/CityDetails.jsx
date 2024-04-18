import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './CityDetails.css'
import { useNavigate, Link } from 'react-router-dom'



const API_URL = 'https://restaurant-beckend.adaptable.app'

const CityDetails = () => {
  const navigate = useNavigate();
//   const [isPopUpOpen, setPopUpOpen] = useState(false)
  const { cityId } = useParams()
  const [city, setCity] = useState({})
  
//   const [message, setMessage] = useState(null)
  const getOneCity = () => {
    axios
      .get(`${API_URL}/city/${cityId}`)
      .then((response) => setCity(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
   getOneCity()
    
  }, [cityId])
  

//   useEffect(() => {
//     if (isPopUpOpen) {
//       setTimeout(() => {
//         setPopUpOpen(false)
//         navigate(`/${dishes}`)
//       }, 3000)
//     }
//   }, [isPopUpOpen])

return (
    <div className='details-page'>
      <div className='container'>
        <div className='page-item'>

          <img src={city.imgUrl} alt={city.name} />
          <h4>Name: {city.name}</h4>
          <p>Latitude: {city.latitude}</p>
          <p>Longitude: {city.longitude}</p>
          <p>Country: {city.country}</p>
          <p>Population: {city.population}</p>
          <p>Description: {city.description}</p>
        
          {/* {isPopUpOpen && <div className='message'>
            <IoIosCheckmarkCircle />{message.message}</div>} */}
        </div>
        <div className='page-item-btn-wrapper'>

          {/* <Link className='btn-style' to={`/update/${city}/${city.id}`}>
            edit
          </Link> */}
          {/* <button className='btn-style' onClick={handleDelete}>Delete</button> */}
          <button className='btn-style' onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
   
  )
}

export default CityDetails