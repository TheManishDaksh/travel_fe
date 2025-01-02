import React from 'react'

function HotelCard({name, image, address, state, rating, price}) {
  return (
        
            <div className='relative rounded-lg border-solid border-2 border-slate-300 text-slate-600 m-2 w-64 bg-white shadow-2xl '> 
            <div>
                <img src={image} alt={name} style={{width:"100%", height:"180px"}}/>
            </div>
            <div className='flex justify-between px-2 pt-2'>
                <span className='font-semibold text-sm'>{name}</span>
                <span className='items-center ml-auto flex'>
                <span class="material-symbols-outlined">star</span>
                <span className='items-center'>{rating}</span>
                </span>
            </div>
            <span className='pl-2 text-xs '>{address+","}</span>
            <span className='pl-2 text-xs '>{state}</span>
            <div className='p-2 pt-4'>
                <span className='font-bold'>Rs.{price}</span>
                <span className='pl-1 text-sm'>night</span>
                </div>
        
            <button className='absolute top-2 right-3 bg-transparent p-0 m-0 cursor-pointer '>
            <span class="material-symbols-outlined">favorite</span>
            </button>
        </div>
       
    )
}

export default HotelCard