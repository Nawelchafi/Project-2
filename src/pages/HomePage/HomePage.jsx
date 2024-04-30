import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import Swiper from '../../components/Swiper/Swiper'
// import SearchBar from '../../components/SearchBar/SearchBar'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'

const HomePage = () => {

  const [restaurants, setRestaurants] = useState([])

  const options = {
    method: 'GET',
    url: 'http://localhost:5002',
    params: {
      location: 'Amsterdam'
    },
    headers: {
      'Authorization': 'Bearer etUZ3WYi8nfnjU2OB6SqQsFsA91R0-tThuzbgOaeaC2zcTWjt4a26Owz317kieHFNgh9cvLwKwPbFxMlpTh1KDxZihtNOlsfPonbbKNB2Dx7KkylY3DgRCe9VlgaZnYx'
    },

  }
  // const options = {
  //   method: 'GET',
  //   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
  //   params: {
  //     locationId: '304554'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
  //     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  //   }

  // };

  const getAllRestaurants = async () => {
    const response = await axios.request(options);
    setRestaurants(response.data.businesses)
    console.log(response.data.businesses)
  };

  useEffect(() => {
    getAllRestaurants()
  }, [])

  return (
    <div>
      <SearchBar />
      <div className='home-container'>
        <Swiper />
      </div>
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