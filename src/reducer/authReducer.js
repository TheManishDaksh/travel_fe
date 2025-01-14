
export const authReducer =(state, {type, payload})=>{
    switch(type){
        case "OPEN_AUTH_MODAL" :
            return{
                ...state,
                isAuthModalOpen : !state.isAuthModalOpen
            }
            case "CLOSE_AUTH" :
                return{
                    ...state,
                    isAuthModalOpen : false
                }
                case "TOGGLE_LOGIN" :
                    return{
                        ...state,
                        authToggle : "login"
                    }
                    case "TOGGLE_SIGNUP" :
                        return {
                            ...state,
                            authToggle : "signup"
                        }
                        case "NAME" :
                            return {
                                ...state,
                                username : payload
                            }
                            case "NUMBER" :
                                return {
                                    ...state,
                                    number : payload
                                }
                                case "EMAIL" :
                                    return {
                                        ...state,
                                        email : payload
                                    }
                                    case "PASSWORD" :
                                        return {
                                            ...state,
                                            password : payload
                                        }
                                        case "CONFIRM_PASSWORD" :
                                            return {
                                                ...state,
                                                confirmPassword : payload
                                            }
                                            case "SET_TOKEN" :
                                                return {
                                                    ...state,
                                                    accessToken : payload
                                                }
                                                case "SET_USERNAME" :
                                                    return {
                                                        ...state,
                                                        username : payload
                                                    }
                                                    case "CLEAR_INPUT" :
                                                        return{
                                                            username : "",
                                                            email : "",
                                                            mobileNumber : 0,
                                                            password : "",
                                                            confirmPassword : ""
                                                        }
            default :
            return state ;
    }
} 