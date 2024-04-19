import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';


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
        <SearchBar/>
      <ul>
        {

          restaurants.map((restaurant) => (
        
<li key={restaurant.restaurantsId}>

              <img src={restaurant.squareImgUrl} alt="" />
              <img src={restaurant.thumbnail.photo.photoSizes.url} alt="" />
              <h4>{restaurant.name}</h4>
              <p>{restaurant.averageRating}</p>
              {<p>{restaurant.currentOpenStatusText}</p>}
              {restaurant.awardInfo && <p>{restaurant.awardInfo.awardType}</p>}
              {restaurant.establishmentTypeAndCuisineTags.length && <p>{restaurant.establishmentTypeAndCuisineTags.join(', ')}</p>}
              <p>{restaurant.priceTag}</p>
              {<p>Reviews count: {restaurant.userReviewCount}</p>}
              <p>Review: {restaurant.reviewSnippets.reviewSnippetsList[0].reviewText}</p>
              <Link to={`/restaurants/${restaurant.restaurantsId}`}>
                Show more details
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}



export default HomePage




// const options = {
//   method: 'GET',
//   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation',
//   params: {query: 'mumbai'},
//   headers: {
//     'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
//     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//   }

// };