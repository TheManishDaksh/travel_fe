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

    function onClose(){
        dateDispatch({
            type : "CLOSE_SEARCH_MODAL"
        })
    }    

    useEffect(()=>{
        ( async ()=>{
         try {
             const {data} = await axios.get(`https://travelo-mhdr.onrender.com/api/hotels?category=${hotelCategory}`);
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
    
        return (
            <div className="w-full h-full fixed inset-0 z-20 bg-overlay overflow-y-auto"> 
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-gray-600">close</span>
              </button>
        
              <div className="
                flex flex-col sm:flex-col md:flex-row lg:flex-row 
                items-start md:items-center 
                gap-4 p-4 
                absolute 
                top-14 
                left-0 sm:left-0 md:left-[50%] lg:left-[50%] 
                transform md:-translate-x-1/2
                w-full sm:w-[90%] md:w-[90%] lg:w-[80%]
                mx-auto 
                bg-white rounded-lg
                shadow-lg
                sm:mx-[5%] md:mx-0
              ">

                <div className="w-full md:w-48 lg:w-48">
                  <label className="text-sm font-medium text-gray-700"> Where </label>
                  <br />
                  <input 
                    value={destination}
                    placeholder="Destination"
                    className="w-full border-hidden focus:outline-none text-gray-800"
                    onChange={handleDestinationSearch}
                    autoFocus
                    onFocus={handleDestinationFocus}
                  />
                </div>

                <div className="w-full md:w-40 lg:w-40">
                  <label className="text-sm font-medium text-gray-700"> Check In </label>
                  <br />
                  <DateSelector checkInType="in" />
                </div>
        
                <div className="w-full md:w-40 lg:w-40">
                  <label className="text-sm font-medium text-gray-700"> Check Out </label>
                  <br />
                  <DateSelector checkInType="out"/>
                </div>
        
                <div className="w-full md:w-40 lg:w-40">
                  <label className="text-sm font-medium text-gray-700"> No. of Guest </label>
                  <br />
                  <input
                    type="number"
                    value={guests}
                    placeholder="guests"
                    className="w-full border-hidden focus:outline-none text-gray-800"
                    onChange={handleGuestChange}
                    min="1"
                  />
                </div>
        
                <div 
                  onClick={handleSearchBtn}
                  className="
                    w-full md:w-auto lg:w-auto 
                    bg-primary text-white 
                    hover:bg-orange-600 
                    p-3 
                    flex items-center justify-center 
                    gap-1 
                    rounded-lg 
                    cursor-pointer 
                    transition-colors
                    md:self-end lg:self-end
                    mt-2 md:mt-0 lg:mt-0
                  "
                >
                  <span className="search material-symbols-outlined bg-white text-orange-500 p-2 rounded-full">
                    search
                  </span>
                  <span className="text-lg font-semibold bg-inherit">Search</span>
                </div>
              </div>
        
              {isDestinationOpen && (
                <div className="
                  bg-white 
                  w-[90%] sm:w-[90%] md:w-[20rem] lg:w-[20rem]
                  max-h-[50vh] 
                  overflow-y-auto 
                  absolute 
                  top-[28rem] sm:top-[28rem] md:top-[10.2rem] lg:top-[7.5rem]
                  left-[50%] 
                  transform -translate-x-1/2
                  md:left-[5%] md:translate-x-0
                  lg:left-[calc(50%-15rem)] lg:translate-x-0
                  p-3 
                  z-20 
                  rounded-lg
                  shadow-lg
                ">
                  {destinationOptions && destinationOptions.map(({address, city, _id}) => (
                    <p 
                      className="p-2 text-slate-700 text-base cursor-pointer hover:bg-slate-100 transition-colors rounded"
                      onClick={() => handleaddressResult(address)}
                      key={_id}
                    >
                      {address}, {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        };
        
        export default Search;