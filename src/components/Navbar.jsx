import React from 'react'
import { useDateContext } from '../context/DateContext'
import { useAuthContext } from '../context/AuthContext';

function Navbar() {

    const {destination, checkIn, checkOut, guests,dateDispatch} = useDateContext();
    const {authDispatch} = useAuthContext();

    function handleSearchClick(){
        dateDispatch({
            type : "OPEN_SEARCH_MODAL"
        })
    }

    function handleAuthBtn(){
        
        authDispatch({
            type : "OPEN_AUTH_MODAL"
        })
    }
  return(
   <header className='flex py-2 px-10 justify-between border-b border-solid border-slate-400 items-center content-center text-center'>
    <h1 className='text-3xl text-primary font-bold'>
        <a href="/">
            TravelO
        </a>
    </h1>
    <div onClick={handleSearchClick} 
    className='border-2 border-solid bg-white shadow-lg border-slate-400 text-slate-500 p-1 rounded-lg gap-1 space-x-2 font-[0.875rem] place-items-center '>  
        <span>{destination || "Any Where" }</span>
        <span className='border-r-2 '></span>
        <span>
            {checkIn && checkOut ? `${checkIn.toLocaleDateString("en-US",{
                day: "numeric",
                month : "short"
            })}-${checkOut.toLocaleDateString("en-US",{
                day: "numeric",
                month : "short"
            })}` : "Any week"}    
         </span>
        <span className='border-r-2 '></span>
        <span>{guests > 0 ? `${guests} guests` : " Add Guests"}</span>

        <span class=" search material-symbols-outlined" style={{cursor:'pointer',padding:"4px", alignItems:"center", alignContent:"center", backgroundColor:"darkOrange",borderRadius:"4px", height:"100%",paddingRight:"6px",fontSize:"1.75rem" }}
        > Search</span>
    </div>
    
    <div className='align-center pt-2 bg-white shadow-lg space-x-4 border-solid border-slate-400 border-2 px-2 rounded-lg ' onClick={handleAuthBtn}>
    <span class="material-symbols-outlined" style={{cursor:"pointer"}}>menu</span>  
    <span className='border-r-2'></span>
    <span class="material-symbols-outlined" style={{cursor:"pointer"}}>person</span>
    </div>
   </header>
  )
}

export default Navbar