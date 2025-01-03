import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/navbar/Navbar";
import HotelImages from "../components/HotelImages";


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
       <div>
        <Navbar/>
        <main>
            <HotelImages 
             singleHotel= {singleHotel}
            />
        </main>
       </div>
    )
}
export default SingleHotel