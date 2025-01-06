import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer/dateReducer";

const initialState = {
    checkIn : null, 
    checkOut : null,
    isSearchModalOpen : false
}
const DateContext = createContext(initialState)

 const DateProvider = ({children})=>{

    const [{checkIn,checkOut, isSearchModalOpen}, dateDispatch ] = useReducer(dateReducer, initialState )
    return(
        <DateContext.Provider value={{checkIn, checkOut, isSearchModalOpen, dateDispatch }}>
            {children}
        </DateContext.Provider>
    )
}

const useDateContext = ()=> useContext(DateContext)

export {useDateContext, DateProvider};