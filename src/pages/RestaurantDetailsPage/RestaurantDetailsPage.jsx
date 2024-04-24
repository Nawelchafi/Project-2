import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";


const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const RestaurantDetailsPage = () => {
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const options = {
    method: 'GET',
    url: `http://localhost:5002/restaurants/${restaurantId}`,
    // params: {
    //   location: 'Amsterdam'
    // },
    headers: {
      'Authorization': 'Bearer etUZ3WYi8nfnjU2OB6SqQsFsA91R0-tThuzbgOaeaC2zcTWjt4a26Owz317kieHFNgh9cvLwKwPbFxMlpTh1KDxZihtNOlsfPonbbKNB2Dx7KkylY3DgRCe9VlgaZnYx'
    },

  }
  // const options = {
  //   method: 'GET',
  //   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',
  //   params: {
  //     restaurantsId: restaurantId,
  //     currencyCode: 'USD'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '894e6ec872msh92a314ed75a21adp1a73d4jsnb937ff5a34ea',
  //     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  //   }
  // }
  const getDetailsRestaurants = async () => {
    const response = await axios.request(options);
    setRestaurant(response.data)
    console.log(response.data)
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
      <img src={restaurant.image_url} alt="" />
      <h2>{restaurant.name}</h2>
      {restaurant.attributes.menu_url && <a href={`${restaurant.attributes.menu_url}`}>Menu</a>}
      {restaurant.is_closed ? (<p>Open</p>) : (<p>Closed</p>)}
      <p><IoIosStar />{restaurant.rating}</p>
      <p>{restaurant.attributes.menu_url}</p>
      <p>Cuisine:{restaurant.categories.map(item => (<span key={item.alias}>{item.title}</span>))}</p>
      <p><FaLocationDot /> {restaurant.location.address1}</p>

      <div>Open days: {restaurant.hours.map(item => (
        <div key={item.day}>
          <p>{days[item.day]}</p>
          <p>Start:{item.start.slice(0, 2)}:{item.start.slice(-2)}</p>
          <p>Close:{item.end.slice(0, 2)}:{item.end.slice(-2)}</p>
          {item.is_overnight && <p>Working</p>}
        </div>
      ))}</div>

      <p><MdEmail /> <a href='mailto:restaurant@gmail.com'>restaurant@gmail.com</a> </p>
      <p><FaPhoneVolume /> <a href={`tel:${restaurant.phone}`}></a>{restaurant.display_phone}</p>
      <p> <a href={`${restaurant.url}`}>website</a></p>
      <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.1831510540733!2d19.06032231539076!3d47.52529717917932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dbf3d291d317%3A0xce5d360b0de82dd1!2zQnVkYXBlc3QsIFbDoWNpIMO6dCA3Ni10MSwgMTEzMyDQktC10L3Qs9GA0LjRjw!5e0!3m2!1sru!2sua!4v1650316046959!5m2!1sru!2sua"
                                width="600" height="450" style={{ "border": 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default RestaurantDetailsPage