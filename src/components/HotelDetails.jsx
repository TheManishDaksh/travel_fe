
export const HotelDetails = ({ singleHotel }) => {
  const {
    hostName,
    hostJoinedOn,
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
    healthAndSafety
  } = singleHotel;

  return (
    <div className=" text-lg  text-slate-800">
      <div className="">
        <p >
          Hosted by {hostName}, Joined on {hostJoinedOn}
        </p>
        <div className="border-b-[1px] border-solid border-slate-700 text-base py-2 pb-4">
          {numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds+" "}
           beds. {numberOfBathrooms} bathrooms.
        </div>
      </div>
      <div className="">
        <div className="py-4">
          <p className="flex items-center gap-2">
          <span class="material-symbols-outlined">apps</span>
          Dedicated Workspace
          </p>
          <span className="text-base"> 
            A common area with wifi that is well suited for working
          </span>
        </div>

        <div className="py-4">
          <p className="flex items-center gap-2">
          <span class="material-symbols-outlined">apps</span>
          Great Location
          </p>
          <span className="text-base">
            80% of recent guests gave the location a 5-star rating
          </span>
        </div>

        <p className="flex items-center gap-2 pb-4 border-b-[1px] border-solid border-slate-700">
        <span class="material-symbols-outlined">apps</span> 
        Free cancellation before 7 days of booking
        </p>
      </div>

      <div className=" ">
        <p className="py-3">What this place offers</p>
        <div className="text-base grid grid-cols-2 gap-4 border-b-[1px] border-solid border-slate-700 pb-4">
         
            <span className=" flex items-center gap-2 ">
            <span class="material-symbols-outlined">apps</span>Kitchen
            </span>
            <span className="flex items-center gap-2">
            <span class="material-symbols-outlined">apps</span>Free parking
              on premises
            </span>
            <span className="flex items-center gap-2">
            <span class="material-symbols-outlined">apps</span>Dedicated
              Workspace
            </span>
          
            <span className="flex items-center gap-2">
            <span class="material-symbols-outlined">apps</span>
            Wifi
            </span>
            <span className="flex items-center gap-2">
            <span class="material-symbols-outlined">apps</span>
            Washing Machine
            </span>
            <span className="flex items-center gap-2 ">
            <span class="material-symbols-outlined">apps</span>
            Patio or Balcony
            </span>
          </div>
        </div>
        <div >
            <p className="py-3">Health And Safety</p>
            <span className="flex items-center gap-2 py-2">
            <span>{healthAndSafety && healthAndSafety.map((health)=>(
              <div className="items-center flex gap-2 py-2">
                <span class="material-symbols-outlined">apps</span>
                 {health} </div>
            ))}</span>
            </span>
        
          </div>          
      </div>
  );
};