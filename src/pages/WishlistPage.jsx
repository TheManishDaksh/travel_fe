import { useNavigate } from "react-router-dom"
import HotelCard from "../components/HotelCard"
import ShortNav from "../components/ShortNav"
import { useWishContext } from "../context/WishlistContext"

function WishlistPage() {
    
    const {wishlist} = useWishContext()
    const navigate = useNavigate()

    function handleHomeClick(){
        navigate("/")
    }
  return (
    <div>
        <ShortNav/>
        <section className="grid py-8 px-10 md:grid-cols-3 lg:grid-cols-4 space-y-8">
            {wishlist.length > 0 ? wishlist.map((hotel)=>(
                <HotelCard hotel={hotel} />
            )) : <div className="flex items-center md:w-[150vh] lg:w-[210vh] flex-col">
                    <div className="p-4 text-lg font-bold"> "Your wishlist is Empty"</div>
                    <button className="p-2 bg-orange-500 text-white font-bold rounded-lg"
                    onClick={handleHomeClick}
                    > Add To Wishlist</button>
                </div>}
        </section>
    </div>
  )
}

export default WishlistPage