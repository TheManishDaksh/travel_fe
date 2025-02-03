import React from 'react'

function HotelImages({singleHotel}) {
    const {image, imageArr, name, state} = singleHotel;
  return (
    
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
    <div className="mb-4">
      <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
        {name}, {state}
      </span>
    </div>
    
    <div className='flex flex-col lg:flex-row gap-4'>
      {/* Primary Image */}
      <div className='w-full lg:w-2/3 lg:flex-shrink-0'>
        <img 
          src={image} 
          alt="primary-image" 
          className='
            w-full 
            h-64 
            md:h-80 
            lg:h-[25rem] 
            object-cover 
            rounded-lg 
            shadow-md
          '
        />   
      </div>     
      
      {/* Secondary Images Grid */}
      <div className='
        grid 
        grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-2 
        gap-3 
        md:gap-4 
        w-full 
        lg:w-1/3
      '>
        {imageArr && imageArr.slice(0, 4).map((imgSrc, index) => (
          <div 
            key={index} 
            className='
              w-full 
              aspect-square 
              overflow-hidden 
              rounded-lg 
              shadow-sm
            '
          >
            <img 
              src={imgSrc} 
              alt={`Hotel secondary image ${index + 1}`}
              className='
                w-full 
                h-full 
                object-cover 
                hover:scale-105 
                transition-transform 
                duration-300
              '
            />
          </div>
        ))}
        
        {/* Placeholder for additional images if less than 4 */}
        {imageArr && imageArr.length < 4 && 
          Array(4 - imageArr.length).fill().map((_, index) => (
            <div 
              key={`placeholder-${index}`} 
              className='
                w-full 
                aspect-square 
                bg-gray-200 
                rounded-lg 
                flex 
                items-center 
                justify-center 
                text-gray-500
              '
            >
              No Image
            </div>
          ))
        }
      </div>
    </div>
  </div>
);
};

export default HotelImages;