import React, { useEffect, useState } from 'react'
import HotelCard from '../components/HotelCard'
import Navbar from '../components/Navbar'
import axios from "axios"
import Category from '../components/Category'
import { useCategory } from '../context/categoryContext'
import { useDateContext } from '../context/DateContext'
import { Search } from '../components/Search'
import { useAuthContext } from '../context/AuthContext'
import { AuthModal } from '../components/AuthModal'

function HomePage() {

    const [hotels, setHotels] = useState([]);
    const {hotelCategory} = useCategory();
    const {isSearchModalOpen} = useDateContext();
    const {isAuthModalOpen} = useAuthContext()
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
            hotel={hotel}
            _id={hotel._id}
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
      {isSearchModalOpen && <Search/>}
      {isAuthModalOpen && <AuthModal/>}
      <div className='text-center p-4 font-bold text-lg ' 
      > You have seen it all, thank you for visiting </div>
    </div>
  )
}

export default HomePage