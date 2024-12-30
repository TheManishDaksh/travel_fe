import React from 'react'

function HotelCard() {
  return (
        <div className='py-2 px-10'>
            <div className='relative rounded-lg border-solid border-2 border-slate-300 text-slate-600 m-2 w-64 bg-white shadow-2xl'> 
            <div>
                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hotel"/>
            </div>
            <div className='flex justify-between px-2 pt-2'>
                <span className='font-bold'>Banglore Hotel</span>
                <span className='items-center ml-auto flex'>
                <span class="material-symbols-outlined">star</span>
                <span className='items-center'>4.3</span>
                </span>
            </div>
            <span className='pl-2 text-xs '>Banglore India</span>
            <div className='p-2 pt-4'>
                <span className='font-bold'>Rs. 3800</span>
                <span className='pl-1'>night</span>
                </div>
        
            <button className='absolute top-2 right-3 bg-transparent p-0 m-0 cursor-pointer '>
            <span class="material-symbols-outlined">favorite</span>
            </button>
        </div>
        </div>
    )
}

export default HotelCard