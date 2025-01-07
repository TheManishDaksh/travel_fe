import { useAuthContext } from "../context/AuthContext"
import { AuthLogin } from "./AuthLogin"
import { AuthSignup } from "./AuthSignup"

export const AuthModal=()=>{

    const {authDispatch, authToggle} = useAuthContext()
    function handleCloseBtn (){
        authDispatch({
            type : "CLOSE_AUTH"
        })
    }

    function handleSignupBtn(){
        authDispatch({
            type : "TOGGLE_SIGNUP"
        })
    }

    function handleLoginBtn(){
        authDispatch({
            type : "TOGGLE_LOGIN"
        })
    }
    return(
        <div className="w-[100%] h-[100%] top-0 bottom-0 z-20 fixed bg-overlay">
  <div className="flex flex-col absolute top-4 opacity-100 border-none right-0 gap-4 w-[400px] p-4 font-[1.5rem] rounded-lg">
  
    <div className="flex justify-between items-center">
      <div className={`text-lg ${authToggle === "login" ? "bg-orange-500" : ""}`}>
        <button onClick={handleLoginBtn}>Login</button>
      </div>
      <div className={`text-lg ${authToggle === "signup" ? "bg-orange-500" : ""}`}>
        <button onClick={handleSignupBtn}>Signup</button>
      </div>
      <div className="cursor-pointer pt-1 text-slate-400" onClick={handleCloseBtn}>
        <span className="material-symbols-outlined">close</span>
      </div>
    </div>

    <div className="mt-4">
      {authToggle === "login" ? <AuthLogin /> : <AuthSignup />}
    </div>
  </div>
</div>

    )
}