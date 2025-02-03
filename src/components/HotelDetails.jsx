
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-slate-800">
    {/* Host Information */}
    <div className="mb-4">
      <p className="text-base md:text-lg font-medium">
        Hosted by {hostName}, Joined on {hostJoinedOn}
      </p>
      <div className="border-b border-slate-300 text-sm md:text-base py-3 text-slate-600">
        {numberOfguest} guests • {numberOfBedrooms} bedrooms • {numberOfBeds} beds • {numberOfBathrooms} bathrooms
      </div>
    </div>

    {/* Key Features */}
    <div className="space-y-4 border-b border-slate-300 pb-4">
      {[
        {
          icon: "apps",
          title: "Dedicated Workspace",
          description: "A common area with wifi that is well suited for working"
        },
        {
          icon: "location_on",
          title: "Great Location",
          description: "80% of recent guests gave the location a 5-star rating"
        }
      ].map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <span className="material-symbols-outlined text-primary mt-1">
            {feature.icon}
          </span>
          <div>
            <p className="font-semibold text-base">{feature.title}</p>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </div>
        </div>
      ))}

      <div className="flex items-center space-x-3 text-sm">
        <span className="material-symbols-outlined text-primary">calendar_month</span>
        <p>Free cancellation before 7 days of booking</p>
      </div>
    </div>

    {/* What This Place Offers */}
    <div className="py-4 border-b border-slate-300">
      <p className="text-lg font-semibold mb-4">What this place offers</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          "Kitchen", 
          "Free parking on premises", 
          "Dedicated Workspace", 
          "Wifi", 
          "Washing Machine", 
          "Patio or Balcony"
        ].map((amenity, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 text-sm md:text-base"
          >
            <span className="material-symbols-outlined text-primary">apps</span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Health and Safety */}
    <div className="py-4">
      <p className="text-lg font-semibold mb-4">Health And Safety</p>
      <div className="space-y-2">
        {healthAndSafety && healthAndSafety.map((health, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 text-sm md:text-base"
          >
            <span className="material-symbols-outlined text-primary">security</span>
            <span>{health}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default HotelDetails;