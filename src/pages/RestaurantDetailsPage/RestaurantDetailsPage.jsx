import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { IoIosStar } from "react-icons/io";

const RestaurantDetailsPage = () => {
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState(null)

  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',
    params: {
      restaurantsId: restaurantId,
      currencyCode: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  }
  const getDetailsRestaurants = async () => {
    const response = await axios.request(options);
    setRestaurant(response.data.data)
  };
  console.log(restaurant)
  useEffect(() => {
    getDetailsRestaurants()

  }, [])
  if (!restaurant) {
    return <h2>Loading</h2>

  }
  return (
    <div>
      <img src={restaurant.location.photo.images.large.url} alt="" />
      {/* <img src={restaurant.overview.links.addPhotoUrl} alt="" /> */}
      <h2>{restaurant.location.name}</h2>
      {<p>{restaurant.hours.currentHoursText}</p>}
      {<p>Open status: {restaurant.hours.openStatus}</p>}
      <p><FaRankingStar /> {restaurant.location.ranking}</p>
      {/* <p>Price level: {restaurant.location.price_level}</p> */}
      <p><IoIosStar />{restaurant.location.rating}</p>
      <p><FaLocationDot /> {restaurant.location.address}</p>
      <p><FaAward /> {restaurant.overview.award.awardText} <span> {restaurant.overview.award.yearsText}</span></p>
      <p>Description: {restaurant.location.description}</p>
      <ul>Cuisine: {restaurant.location.cuisine.map(item => (<li key={item.key}>{item.name}</li>))}</ul>
      <p>Open days: {restaurant.location.display_hours[0].days}</p>
      <p><BsClockFill /> {restaurant.location.display_hours[0].times.map(item => (<span key={item}>{item}</span>))}</p>
      <p><MdEmail /> {restaurant.location.email}</p>
      <p><FaPhoneVolume /> {restaurant.overview.contact.phone}</p>
      <p><CgWebsite />website: {restaurant.overview.contact.website}</p>
    </div>
  )
}

export default RestaurantDetailsPage