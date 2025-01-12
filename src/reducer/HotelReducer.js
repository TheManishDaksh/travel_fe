export const HotelReducer = (state, {type, payload})=>{
    switch(type){
        case "SET_TO_HOTELS" :
            return{
                ...state,
                hotel : payload
            }
            default :
            return state ;
    }
}