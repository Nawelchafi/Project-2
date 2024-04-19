import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './CityPage.css'
import { Link } from 'react-router-dom'

const API_URL = 'https://restaurant-beckend.adaptable.app'

const CityPage = () => {
    const [cities, setCities] = useState([])
  // const params = useParams()
  
  const getAllCities = () => {
    axios
      .get(`${API_URL}/city`)
      // /${params.dishes} (all 'category' change to the 'params.dishes')
      .then((response) => setCities(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCities()
    
  },[] )
  console.log(cities)
  return (
    
    <div className='all-cities'>
      <div className='container'>
        <ul className='all-cities-list'>
          {cities.map((city) => (
            <li key={city.id}>

              <img src={city.imgUrl} alt={city.name} />
              <h4>{city.name}</h4>
              <p>{city.country}</p>
              
             <Link className='all-cities-link' to={`/city/${city.id}`}>
                Show more information
              </Link>
            </li>
          )
          )}
        </ul>
      </div>
    </div>
  )
}

export default CityPage