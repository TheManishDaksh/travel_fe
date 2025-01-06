import { DateSelector } from "./DateSelector"

export const Search =()=>{
    return(
        <div className="w-[100%] h-[100%] top-0 bottom-0 z-20 fixed bg-overlay ">
            <div className="flex items-center pl-4 absolute top-14 left-[20%] border-none bg-white translate[-50%,0] rounded-lg">
                <div>
                    <label> Where </label>
                    <br />
                    <input 
                        placeholder="Destination"
                        className="border-hidden focus:outline-none "
                    />
                </div>
                <div>
                    <label> Ckeck In </label>
                    <br />
                    <DateSelector checkInType ="in" />
                </div>
                <div>
                    <label> Check Out </label>
                    <br />
                    <DateSelector checkInType ="out"/>
                </div>
                <div>
                    <label> No. of Guest </label>
                    <br />
                    <input
                    type="number"
                        placeholder="guests"
                          className="border-hidden focus:outline-none "
                    />
                </div>
                <div className="bg-primary text-white hover:bg-orange-600 p-3 flex items-center justify-center gap-1 rounded-lg cursor-pointer">
                <span className="search material-symbols-outlined bg-white text-orange-500 p-2 rounded-full" >search</span>
                    <span className="bg-primary hover:bg-orange-600 text-lg font-semibold ">Search</span>
                </div>
            </div>
        </div>
    )
}