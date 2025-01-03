import React, { useEffect, useState } from 'react'
import HotelCard from '../components/hotelCard/HotelCard'
import Navbar from '../components/navbar/Navbar'
import axios from "axios"
import Category from '../components/category/category'
import { useCategory } from '../context/categoryContext'

function HomePage() {

    const [hotels, setHotels] = useState([]);
    const {hotelCategory} = useCategory();
    useEffect(()=>{
        (async ()=>{
            try{
            const {data} = await axios.get(`http://localhost:3000/api/hotels?category=${hotelCategory}`)
            setHotels(data)
            }catch(error){
                console.log(error);
            }
        })()
    },[hotelCategory])
  return (
    <div> 
        <Navbar className="sticky"/>
        <Category/>
        <main className='grid grid-cols-4 gap-7 p-5 pl-9 overflow-y-auto  '>
        {
            hotels.map((hotel)=> <HotelCard key={hotel._id}
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
      <div className='text-center p-4 font-bold text-lg ' 
      > You have seen it all, thank you for visiting </div>
    </div>
  )
}

export default HomePage