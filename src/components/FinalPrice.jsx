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
        <div className="pr-28"> 
            <div className="rounded-lg shadow-lg bg-white p-4 text-slate-700">
            <div className='flex justify-between px-2 pt-2 gap-24'>
                <span> <span className=' text-lg font-semibold'>Rs. {price} </span>
                <span className="text-base">night</span>
                </span>
                <span className='items-center ml-auto flex'>
                <span class="material-symbols-outlined">star</span>
                <span className='items-center'>{rating}</span>
                </span>
            </div>
            <div className="flex justify-between p-2">
                <div className="flex flex-col">
                <label>CheckIn</label>
                <DateSelector checkInType="in"/>
                </div>
                <div className="flex flex-col">
                <label>CheckOut</label>
                <DateSelector checkInType="out"/>
                </div> 
            </div>
            <div className="p-[6px] border-2 border-solid border-slate-300 rounded-lg">
                <div>Number of Guests</div>
                <div> {guests <= 0 ? <input className="border-none focus:outline-none"
                placeholder="add guests" onKeyDown={handleGuestChange}
                /> : `${guests} guests` }</div>
            </div>
            <div className="pt-3 shadow-lg">
            <button onClick={handleReserveClick}
            className="bg-orange-500 text-white w-[100%] p-3 font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg"
            >Reserve</button>
            </div>
            <div className="px-3 pt-7 flex justify-between pb-3">
                <span>Rs.{price} x 2 nights</span>
                <span>Rs. {price*2}</span>
            </div>
            <div className="px-3 py-2 flex justify-between border-b-2 border-slate-400">
                <span>Service fee</span>
                <span>Rs. 200</span>
            </div>
            <div className="px-3 py-4 flex justify-between">
                <span>Total</span>
                <span>Rs. {price *2 + 200}</span>
            </div>
        </div>
        </div>
    )
}