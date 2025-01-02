import React, { useEffect, useState } from 'react'
import HotelCard from '../components/hotelCard/HotelCard'
import Navbar from '../components/navbar/Navbar'
import axios from "axios"

function HomePage() {

    const [hotels, setHotels] = useState([])
    useEffect(()=>{
        (async ()=>{
            try{
            const {data} = await axios.get('http://localhost:3000/api/hotels')
            setHotels(data)
            }catch(error){
                console.log(error);
            }
        })()
    },[])
  return (
    <div> 
        <Navbar/>
        <main className='flex float-start flex-col'>
        {
            hotels.map((hotel)=> <HotelCard key={hotel.id}
            hotel = {hotel}
            name={hotel.name}
            image={hotel.image}
            address={hotel.address}
            state={hotel.state}
            rating={hotel.rating}
            price={hotel.price}
            />
        )
        }
      </main>
    </div>
  )
}

export default HomePage