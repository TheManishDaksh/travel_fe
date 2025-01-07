import { useState, useEffect } from "react";
import { DateSelector } from "./DateSelector"
import { useDateContext } from "../context/DateContext"
import { useCategory } from "../context/categoryContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Search =()=>{

    const {destination, guests, isDestinationOpen, dateDispatch} = useDateContext();
    const {hotelCategory} = useCategory();
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    function handleDestinationSearch(event){ 
        dateDispatch({
            type : "DESTINATION",
            payload : event.target.value       
        })
    }
    useEffect(()=>{
        ( async ()=>{
         try {
             const {data} = await axios.get(`http://localhost:3000/api/hotels?category=${hotelCategory}`);
             setHotels(data)
         } catch (error) {
             console.log(error);
         }
     })()
     },[hotelCategory])

     function handleGuestChange(event){
        dateDispatch ({
            type : "GUEST",
            payload : event.target.value
        })
     }

     function handleaddressResult(address){
        dateDispatch({
            type : "DESTINATION",
            payload : address
        })
     }

     function handleDestinationFocus (){
        dateDispatch ({
            type : "DESTINATION_FOCUS"
        })
     }

     function handleSearchBtn(){
        dateDispatch({
            type : "FILTERED_PAGE"
        })
        navigate(`/hotels/${destination}`)
     }

     const destinationOptions = hotels.filter(
        ({ address, city, state, country }) =>
          address?.toLowerCase().includes(destination.toLowerCase()) ||
          city?.toLowerCase().includes(destination.toLowerCase()) ||
          state?.toLowerCase().includes(destination.toLowerCase()) ||
          country?.toLowerCase().includes(destination.toLowerCase())
      );
    
    return(
        <div className="w-[100%] h-[100%] top-0 bottom-0 z-20 fixed bg-overlay ">
            <div className="flex items-center pl-4 absolute top-14 left-[20%] border-none bg-white translate[-50%,0] rounded-lg">
                <div>
                    <label> Where </label>
                    <br />
                    <input 
                        value={destination}
                        placeholder="Destination"
                        className="border-hidden focus:outline-none "
                        onChange={handleDestinationSearch}
                        autoFocus
                        onFocus={handleDestinationFocus}
                    />
                </div>
                <div>
                    <label> Ckeck In </label>
                    <br />
                    <DateSelector checkInType ="in" />
                </div>
                <div>
                    <label> Check Out </label>
                    <br />
                    <DateSelector checkInType ="out"/>
                </div>
                <div>
                    <label> No. of Guest </label>
                    <br />
                    <input
                    type="number"
                        value={guests}
                        placeholder="guests"
                        className="border-hidden focus:outline-none "
                        onChange={handleGuestChange}
                    />
                </div>
                <div onClick={handleSearchBtn}
                className="bg-primary text-white hover:bg-orange-600 p-3 flex items-center justify-center gap-1 rounded-lg cursor-pointer">
                <span className="search material-symbols-outlined bg-white text-orange-500 p-2 rounded-full" >search</span>
                    <span className="bg-primary hover:bg-orange-600 text-lg font-semibold ">Search</span>
                </div>
            </div>
            {isDestinationOpen && <div className="bg-white w-[20rem] max-h-[50vh] overflow-y-auto top-[7.5rem] left-60 p-3  z-20 absolute rounded-lg">
            {destinationOptions && destinationOptions.map(({address, city,_id})=>(
                <p className="p-2 text-slate-700 text-base cursor-pointer hover:bg-slate-200"
                onClick={()=>handleaddressResult(address)}
                key={_id}
                >{address},{city}</p>
            ))}
            </div>}
            
        </div>
    )
}