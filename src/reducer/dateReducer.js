
export const dateReducer =(state, {type, payload})=>{
   switch(type){
    case  "OPEN_SEARCH_MODAL" : 
        return {
            ...state,
          isSearchModalOpen : !state.isSearchModalOpen
        }
        case "CHECK_IN" :
            return {
                ...state,
                checkIn : payload
            }
            case "CHECK_OUT" :
                return {
                    ...state,
                    checkOut : payload
                }
        default : 
        return {
            ...state 
        }
   }
}