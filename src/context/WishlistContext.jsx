import { createContext, useContext, useReducer } from "react"
import { wishlistReducer } from "../reducer/wishlistReducer"

const initialValue = { 
    wishlist : []
}

const WishlistContext = createContext(initialValue)

const WishlistProvider =({children})=>{

    const [{wishlist}, wishlistDispatch] = useReducer( wishlistReducer, initialValue)
    return(
        <WishlistContext.Provider value={{wishlistDispatch, wishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishContext =()=> useContext(WishlistContext)

export {useWishContext, WishlistProvider}