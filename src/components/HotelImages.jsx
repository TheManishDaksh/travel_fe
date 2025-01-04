import React from 'react'

function HotelImages({singleHotel}) {
    const {image, imageArr, name, state} = singleHotel;
  return (
    
    <div className=' gap-4 max-w-7xl mx-auto p-8 pt-16'> 
          <div className="mb-4">
        <span className="text-lg font-semibold">
          {name}, {state}
        </span>
      </div>
        <div className='flex gap-4'>
        <div className='flex-shrink-0'>
            <img src={image} alt="primary-image" 
            className='w-[39rem] h-[25rem] object-cover rounded-lg'
            />   
        </div>     
        <div className='grid grid-cols-2 gap-4 text-center '>
            { imageArr && imageArr.map((image)=>(
                <img src={image} 
                key={image} alt='No-secondary-images available'
                className='w-56 h-48 object-cover rounded-lg'
                />
            ))}
        </div>
        </div>
    </div>
  )
}

export default HotelImages