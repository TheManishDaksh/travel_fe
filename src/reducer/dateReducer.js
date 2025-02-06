
export const dateReducer =(state, {type, payload})=>{
   switch(type){
    case  "OPEN_SEARCH_MODAL" : 
        return {
            ...state,
          isSearchModalOpen : !state.isSearchModalOpen
        }
        case "CLOSE_SEARCH_MODAL" :
            return {
                ...state,
                isSearchModalOpen : false
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
                case "DESTINATION" :
                    return {
                        ...state,
                        destination : payload
                    }
                    case "GUEST" :
                        return {
                            ...state,
                            guests : payload
                        }
                        case "DATE_FOCUS":
                            return{
                                ...state,
                                isDestinationOpen : false
                            }
                            case "DESTINATION_FOCUS":
                                return {
                                    ...state,
                                isDestinationOpen : true
                                }
        default : 
        return {
            ...state 
        }
   }
}