import { Fragment, useState,useEffect } from "react"
import Navbar from "../components/Navbar"
import { useDateContext } from "../context/DateContext"
import axios from "axios"
import HotelCard from "../components/HotelCard"

export const SearchHotelPage=()=>{

    const [hotels, setHotels] = useState([]);
    const {destination} = useDateContext()

    useEffect(()=>{
        ( async ()=>{
         try {
             const {data} = await axios.get("http://localhost:3000/api/hotels");
             setHotels(data)
         } catch (error) {
             console.log(error);
         }
     })()
     },[destination])

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
                    />
                    
                )) : 
                    <h1>Destination Not Found </h1>
                }
            </section>
        </Fragment>
    )
}