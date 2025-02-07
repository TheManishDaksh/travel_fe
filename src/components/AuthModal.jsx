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
      <div className="fixed inset-0 z-20 bg-overlay flex items-center justify-center p-4 pt-15">
      <div className="
        w-full sm:w-[400px] 
        bg-white 
        rounded-xl 
        shadow-2xl 
        opacity-100 
        scale-100 
        transition-all 
        duration-300
      ">

        <div className="relative p-6 pb-2">
          <button 
            onClick={handleCloseBtn}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="flex items-center justify-center gap-8 mt-2">
            <button
              onClick={handleLoginBtn}
              className={`
                relative pb-2 text-lg font-medium
                ${authToggle === "login" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-500 hover:text-gray-700"}
                transition-colors
              `}
            >
              Login
            </button>

            <button
              onClick={handleSignupBtn}
              className={`
                relative pb-2 text-lg font-medium
                ${authToggle === "signup" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-500 hover:text-gray-700"}
                transition-colors
              `}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        <div className="p-6 pt-4">
          <div className="transition-all duration-300">
            {authToggle === "login" ? <AuthLogin /> : <AuthSignup />}
          </div>
        </div>
      </div>
    </div>
  );
};
