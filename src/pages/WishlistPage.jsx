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
        <section>
            {wishlist.length > 0 ? wishlist.map((hotel)=>(
                <HotelCard hotel={hotel} />
            )) : <div>
                    <div> "Your wishlist is Empty"</div>
                    <button onClick={handleHomeClick}
                    > Add To Wishlist</button>
                </div>}
        </section>
    </div>
  )
}

export default WishlistPage