import React, { useState, useEffect } from 'react'
import axios from 'axios'


const HomePage = () => {
  const [restaurants, setRestaurants] = useState([])
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
    params: {
      locationId: '304554'
    },
    headers: {
      'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }

  };
  // const options = {
  //   method: 'GET',
  //   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation',
  //   params: {query: 'mumbai'},
  //   headers: {
  //     'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
  //     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  //   }

  // };

  // const options = {
  //   method: 'GET',
  //   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',
  //   params: {
  //     restaurantsId: 'Restaurant_Review-g304554-d8010527-Reviews-Saptami-Mumbai_Maharashtra',
  //     currencyCode: 'USD'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
  //     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  //   }
  // };



  const getAllRestaurants = async () => {
    const response = await axios.request(options);
    setRestaurants(response.data.data.data)
    console.log(response.data.data.data)
  };

  useEffect(() => {
    getAllRestaurants()
  }, [])
  return (
    <div>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.restaurantsId}>

              <img src={restaurant.heroImgUrl} alt="" />
              <h4>{restaurant.name}</h4>
              <img src={restaurant.squareImgUrl} alt="" />
              <p>{restaurant.averageRating}</p>
              {/* <p>{restaurant.awardInfo}</p>
              <p>{restaurant.establishmentTypeAndCuisineTags}</p>
              <p>{restaurant.offers}</p>
              <p>{restaurant.priceTag}</p> */}

            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage