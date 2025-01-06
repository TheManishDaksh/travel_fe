import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer/dateReducer";

const initialState = {
    destination : "",
    guests : 0,
    checkIn : null, 
    checkOut : null,
    isSearchModalOpen : false,
    isDestinationOpen : true    
}
const DateContext = createContext(initialState)

 const DateProvider = ({children})=>{

    const [{guests,isDestinationOpen, destination, checkIn,checkOut, isSearchModalOpen}, dateDispatch ] = useReducer(dateReducer, initialState )
    return(
        <DateContext.Provider value={{guests, isDestinationOpen, destination, checkIn, checkOut, isSearchModalOpen, dateDispatch }}>
            {children}
        </DateContext.Provider>
    )
}

const useDateContext = ()=> useContext(DateContext)

export {useDateContext, DateProvider};