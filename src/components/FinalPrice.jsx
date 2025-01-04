
export const FinalPrice=({singleHotel})=>{
    const {price, rating } = singleHotel;
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
                <span>CheckIn</span>
                <span>CheckOut</span>
            </div>
            <div className="p-[6px] border-2 border-solid border-slate-300 rounded-lg">
                <div>Number of Guests</div>
                <div>2 guests</div>
            </div>
            <div className="pt-3 shadow-lg">
            <button className="bg-orange-500 text-white w-[100%] p-3 font-bold rounded-lg hover:bg-orange-600 transition-colors duration-500 "
            >Request</button>
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