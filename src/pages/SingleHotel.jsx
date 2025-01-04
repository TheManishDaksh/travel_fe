import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/navbar/Navbar";
import HotelImages from "../components/HotelImages";
import { HotelDetails } from "../components/HotelDetails";
import { FinalPrice } from "../components/FinalPrice";



function SingleHotel(){
    const {id} = useParams();
    const [singleHotel, setSingleHotel] = useState({})

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await axios.get(`http://localhost:3000/api/hotels/${id}`)
                setSingleHotel(data)    
            }catch(error){
                console.log(error);
            }
        })()
    },[id])
    const {name, state} = singleHotel;
    return (
       <div className="bg-customWhite">
        <Navbar/>
        <main >
                <HotelImages 
                singleHotel= {singleHotel}
                />
                
        </main>
        <div className="flex justify-between px-20 pb-5">
        <HotelDetails singleHotel={singleHotel} />
        <FinalPrice singleHotel={singleHotel} />
        </div>
       </div>
    )
}
export default SingleHotel