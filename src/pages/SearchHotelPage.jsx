import { Fragment, useState,useEffect } from "react"
import Navbar from "../components/Navbar"
import { useDateContext } from "../context/DateContext"
import axios from "axios"
import HotelCard from "../components/HotelCard"
import { useCategory } from "../context/categoryContext"

export const SearchHotelPage=()=>{

    const [hotels, setHotels] = useState([]);
    const {destination} = useDateContext()
    const {hotelCategory} = useCategory()

    useEffect(()=>{
        ( async ()=>{
         try {
             const {data} = await axios.get(`https://travelo-mhdr.onrender.com/api/hotels`);
             setHotels(data)
         } catch (error) {
             console.log(error);
         }
     })()
     },[destination, hotelCategory])

     const filteredHotels = hotels.filter(
        ({ address, city, state }) =>
          address?.toLowerCase() === destination.toLowerCase() ||
          city?.toLowerCase() === destination.toLowerCase() ||
          state?.toLowerCase() === destination.toLowerCase()
      );
    return(
        <Fragment>
            <Navbar/>
            <section className="grid grid-cols-4 p-10 rounded-lg">
                {filteredHotels ? filteredHotels.map((hotel)=>(
                    <HotelCard key={hotel._id} hotel={hotel}
                        image={hotel.image}
                        name={hotel.name}
                        address={hotel.address}
                        state={hotel.address}
                        rating={hotel.rating}
                        price={hotel.price}
                        _id={hotel._id}
                    />
                    
                )) : 
                    <h1>Destination Not Found </h1>
                }
            </section>
        </Fragment>
    )
}