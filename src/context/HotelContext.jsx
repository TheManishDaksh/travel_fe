import { createContext, useContext, useReducer } from "react";
import { HotelReducer } from "../reducer/HotelReducer";

const initialState = {
    hotel : {}
}

const HotelContext = createContext(initialState);

const HotelProvider = ({children}) => {

    const [{hotel}, hotelDispatch] = useReducer(HotelReducer, initialState);

    return (
        <HotelContext.Provider value={{hotel, hotelDispatch}}>
            {children}
        </HotelContext.Provider>
    )
}

const useHotel = () => useContext(HotelContext);

export { useHotel, HotelProvider };