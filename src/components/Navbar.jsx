import React from 'react'
import {Link} from "react-router-dom"
import { useDateContext } from '../context/DateContext'
import { useAuthContext } from '../context/AuthContext';

function Navbar() {

    const {destination, checkIn, checkOut, guests,dateDispatch} = useDateContext();
    const {authDispatch, username} = useAuthContext();

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
    <header className='flex flex-wrap items-center justify-between py-2 px-4 md:px-6 lg:px-10 border-b border-slate-400 bg-white shadow-sm'>
    <div className='flex items-center w-full md:w-auto justify-between'>
      <h1 className='text-2xl md:text-3xl text-primary font-bold'>
        <Link to="/" className='hover:text-primary/80 transition-colors'>
          TravelO
        </Link>
      </h1>

      <div className='md:hidden'>
        <button 
          onClick={handleAuthBtn} 
          className='text-slate-600 hover:text-slate-800 focus:outline-none'
        >
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </div>
    
    <div 
      onClick={handleSearchClick} 
      className='
        w-full md:w-auto 
        mt-2 md:mt-0
        flex items-center justify-between 
        border-2 border-slate-400 
        bg-white shadow-lg 
        rounded-lg 
        p-2 
        space-x-2 
        cursor-pointer 
        hover:border-primary/70 
        transition-all
        text-sm md:text-base
      '
    >
      <div className='flex items-center space-x-2 overflow-hidden'>
        <span className='truncate max-w-[100px]'>
          {destination || "Any Where"}
        </span>
        <span className='border-r-2 h-4 mx-2'></span>
        <span className='truncate max-w-[120px]'>
          {checkIn && checkOut 
            ? `${checkIn.toLocaleDateString("en-US", { day: "numeric", month: "short" })}-${checkOut.toLocaleDateString("en-US", { day: "numeric", month: "short" })}`
            : "Any week"}
        </span>
        <span className='border-r-2 h-4 mx-2'></span>
        <span className='truncate max-w-[80px]'>
          {guests > 0 ? `${guests} guests` : "Add Guests"}
        </span>
      </div>
      
      <span 
        className='
          ml-2 
          bg-primary 
          text-white 
          rounded-md 
          px-2 py-1 
          flex items-center 
          text-sm
        '
      >
        <span className="material-symbols-outlined mr-1 bg-inherit">search</span>
        Search
      </span>
    </div>
    
    <div className='hidden md:flex items-center space-x-4'>
      {username && (
        <div className='text-slate-700 text-sm'>
          Hello, {localStorage.getItem("username")}
        </div>
      )}
      <button 
        onClick={handleAuthBtn} 
        className='
          bg-white 
          shadow-lg 
          border-2 border-slate-400 
          rounded-lg 
          p-2 
          hover:bg-slate-50 
          transition-colors
        '
      >
        <span className="material-symbols-outlined">person</span>
      </button>
    </div>
  </header>
);
};

export default Navbar;