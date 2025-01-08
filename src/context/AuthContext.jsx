import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";

const initialValue = {
    isAuthModalOpen : false,
    username : "",
    number : "",
    email : "",
    password : "",
    confirmPassword : "",
    authToggle : "login"
}
const AuthContext = createContext(initialValue)

const AuthProvider = ({children})=>{

    const [{isAuthModalOpen, authToggle, username, number, email, password, confirmPassword}, authDispatch] = useReducer(authReducer, initialValue)
   return(
   <AuthContext.Provider value={{isAuthModalOpen, authToggle, username, number, email, password, confirmPassword, authDispatch}}>
        {children}
    </AuthContext.Provider>
)}

const useAuthContext =()=> useContext(AuthContext)

export {useAuthContext, AuthProvider}