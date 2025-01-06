import { DateSelector } from "./DateSelector"

export const Search =()=>{
    return(
        <div className="w-[100%] h-[100%] top-0 bottom-0 z-10 fixed bg-overlay ">
            <div className="flex items-center absolute top-12 left-[20%] border-none bg-white translate[-50%,0]">
                <div>
                    <label> Where </label>
                    <input 
                        placeholder="Destination"

                    />
                </div>
                <div>
                    <label> Ckeck In </label>
                    <DateSelector/>
                </div>
                <div>
                    <label> Check Out </label>
                    <DateSelector/>
                </div>
                <div>
                    <label> No. of Guest </label>
                    <input
                        placeholder="guests"
                    />
                </div>
                <div className="bg-primary">
                <span class="search material-symbols-outlined" >search</span>
                    <span>Search</span>
                </div>
            </div>
        </div>
    )
}