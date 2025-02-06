import { validateNumber, validatePassword } from "../utils/validation"
import { useAuthContext } from "../context/AuthContext"
import loginService from "../Service/loginService"

export const AuthLogin = ()=>{

    let isNumberValidate, isPasswordValidate ;

    const {authDispatch, mobileNumber, password} = useAuthContext()
    function handleNumberLogin(event){
         isNumberValidate = validateNumber(event.target.value)
        
        if(isNumberValidate){
            console.log('Number Valide');
            authDispatch({
                type : "NUMBER",
                payload: event.target.value
            })
        }else{
            console.log("invalid number");
            
        }
    }

    function handlePasswordLogin(event){
         isPasswordValidate = validatePassword(event.target.value)
        if(isPasswordValidate){
            console.log('password Valide');
            authDispatch({
                type : "PASSWORD",
                payload: event.target.value
            })
        }else{
            console.log("invalid Password");
            
        }
    }

    const handleLoginForm = async(event)=>{
        event.preventDefault();
        if(isNumberValidate && isPasswordValidate){
            console.log("login");
            
           const {accessToken, username } = await loginService(mobileNumber, password)
           authDispatch({
            type : "SET_TOKEN",
            payload : accessToken
           });
           authDispatch ({
            type : "SET_USERNAME",
            payload : username
           })
           console.log(accessToken);
        }else{
            authDispatch({
                type : "TOGGLE_SIGNUP"
            })
        }
        authDispatch({
            type : "CLOSE_AUTH"
        })
    }
    return(
        <div className="w-full max-w-md mx-auto p-4 space-y-4 text-gray-700">
      <form className="space-y-3">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-symbols-outlined text-xl">phone</span>
            </span>
            <input
              type="number"
              maxLength="10"
              required
              defaultValue={mobileNumber}
              onChange={handleNumberLogin}
              className=" w-ful pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-symbols-outlined text-xl">lock</span>
            </span>
            <input
              type="password"
              minLength="8"
              maxLength="16"
              required
              defaultValue={password}
              onChange={handlePasswordLogin}
              className=" w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="text-right">
          <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <div>
          <button
            onClick={handleLoginForm}
            type="submit"
            className=" w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 transition-all duration-200"
          >
            Login
          </button>
        </div>
      </form>

      {/* Test Credentials Button */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or</span>
        </div>
      </div>

      <button
        className=" w-full py-2.5 bg-gray-50 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all duration-200
          flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined">account_circle</span>
        Login with Google
      </button>
    </div>
  );
};
