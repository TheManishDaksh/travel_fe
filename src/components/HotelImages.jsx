import React from 'react'

function HotelImages({singleHotel}) {
    const {image, imageArr} = singleHotel;
  return (
    
    <div> 
        <div>
            <img src={image} alt="" />   
        </div>     
        <div>
            { imageArr && imageArr.map((image)=>(
                <img src={image} key={image} />
            ))}
        </div>
    </div>
  )
}

export default HotelImages