import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


const CityRestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([])
  const {cityName} = useParams()
  const options = {
    method: 'GET',
    url: 'http://localhost:5002',
    params: {
      location: cityName
    },
    headers: {
      'Authorization': 'Bearer etUZ3WYi8nfnjU2OB6SqQsFsA91R0-tThuzbgOaeaC2zcTWjt4a26Owz317kieHFNgh9cvLwKwPbFxMlpTh1KDxZihtNOlsfPonbbKNB2Dx7KkylY3DgRCe9VlgaZnYx'
    },

}
const getAllRestaurants = async () => {
  const response = await axios.request(options);
  setRestaurants(response.data.businesses)
  console.log(response.data.businesses)
};

useEffect(() => {
  getAllRestaurants()
}, [])
if (!restaurants.length) {
  return <h2>Loading</h2>

}
  return (


    <div>
      <ul>
      {

        restaurants.map((restaurant) => (

          <li key={restaurant.id}>

            <img src={restaurant.image_url} alt="" />
            <h4>{restaurant.name}</h4>
            <p>{restaurant.rating}</p>
            {restaurant.is_closed?(<p>Open</p>):(<p>Closed</p>)}
            {/* {restaurant.awardInfo && <p>{restaurant.awardInfo.awardType}</p>} */}
            {/* {restaurant.establishmentTypeAndCuisineTags.length && <p>{restaurant.establishmentTypeAndCuisineTags.join(', ')}</p>} */}
            <p>{restaurant.price}</p>
            {<p>Reviews count: {restaurant.review_count}</p>}
      
            <Link to={`/restaurants/${restaurant.id}`}>
              Show more details
            </Link>
          </li>
        ))
      }
    </ul>
    </div>
  )
}

export default CityRestaurantsPage