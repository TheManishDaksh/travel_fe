import { DateSelector } from "./DateSelector";
import { useDateContext } from "../context/DateContext";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const FinalPrice=({singleHotel})=>{
    const {_id, price, rating } = singleHotel;
    const {guests, dateDispatch, checkIn, checkOut} = useDateContext();
    const {authDispatch, accessToken} = useAuthContext()
    const navigate = useNavigate();

    function handleGuestChange(event){
        if(event.key === "Enter"){
            dateDispatch({
                type : "GUEST",
                payload : event.target.value
            })
        }
    }

    function handleReserveClick(){
        if(!checkIn){
            alert("Please Enter Checkin Date")
        }else if (!checkOut){
            alert("Please Enter Checkout Date")
        }else if (guests < 1){
            alert("Please set the number of guests")
        }else if(!accessToken){
            navigate(`/hotels/${_id}/payment`)
        }else{
            authDispatch({
                type : "OPEN_AUTH_MODAL"
            })
        }
    }
    return(
        <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-0">
      <div className="rounded-xl shadow-lg bg-white border border-slate-200 overflow-hidden">

        <div className="flex justify-between items-center p-4 border-b border-slate-200">
          <div>
            <span className="text-xl font-bold text-slate-800">
              Rs. {price}
            </span>
            <span className="text-sm text-slate-600 ml-2">
              night
            </span>
          </div>
          <div className="flex items-center text-slate-700">
            <span className="material-symbols-outlined text-yellow-500 mr-1">star</span>
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 border-b border-slate-200">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Check-In
            </label>
            <DateSelector checkInType="in" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Check-Out
            </label>
            <DateSelector checkInType="out" />
          </div>
        </div>

        <div className="p-4 border-b border-slate-200">
          <div className="text-sm font-medium text-slate-700 mb-2">
            Number of Guests
          </div>
          <div className="border border-slate-300 rounded-lg p-2">
            {guests <= 0 ? (
              <input 
                className="w-full text-sm text-slate-700 focus:outline-none"
                placeholder="Add guests"
                onKeyDown={handleGuestChange}
              />
            ) : (
              <div className="text-slate-700">{guests} guests</div>
            )}
          </div>
        </div>

        <div className="p-4">
          <button 
            onClick={handleReserveClick}
            className="
              w-full 
              bg-orange-500 
              text-white 
              py-3 
              rounded-lg 
              font-bold 
              text-lg 
              hover:bg-orange-600 
              transition-colors 
              duration-300 
              focus:outline-none 
              focus:ring-2 
              focus:ring-orange-500 
              focus:ring-offset-2
            "
          >
            Reserve
          </button>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-700">
              <span>Rs. {price} x 2 nights</span>
              <span>Rs. {price * 2}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-700 pb-2 border-b border-slate-300">
              <span>Service fee</span>
              <span>Rs. 200</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>Rs. {price * 2 + 200}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPrice;