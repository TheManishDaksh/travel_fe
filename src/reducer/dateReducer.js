
export const dateReducer =(state, {type, payload})=>{
   switch(type){
    case  "OPEN_SEARCH_MODAL" : 
        return {
            ...state,
          isSearchModalOpen : !state.isSearchModalOpen
        }
        default : 
        return {
            ...state 
        }
   }
}