import { validateName, validateEmail, validateNumber, validatePassword, validateConfirmPassword } from "../utils/validation" 
import { useAuthContext } from "../context/AuthContext"
import SignupService from "../Service/SignupService"

export const AuthSignup = ()=>{

    const {authDispatch, mobileNumber, password,confirmPassword, username, email} = useAuthContext();

    let isNameValidate, isEmailValidate, isNumberValidate, isPasswordValidate, isConfirmPasswordValidate ;
    
    function handleNameInput(event){
         isNameValidate = validateName(event.target.value)
        if(isNameValidate){
            console.log("validName");
            
            authDispatch({
                type : "NAME",
                payload: event.target.value
            })
            console.log("Name sent");
        }else{
            console.log("invalid name");
            
        }
    }
    localStorage.setItem("username", username)

    function handleNumberInput(event){
         isNumberValidate = validateNumber(event.target.value)
        if(isNumberValidate){
            console.log("validNumber");
            authDispatch({
                type : "NUMBER",
                payload: event.target.value
            })
            console.log("numbber sent");
        }else{
            console.log("invalid number");
            
        }
    }

    function handleEmailInput(event){
         isEmailValidate = validateEmail(event.target.value)
        if(isEmailValidate){
            console.log("validEmail");
            authDispatch({
                type : "EMAIL",
                payload: event.target.value
            })
            console.log("email sent");
        }else{
            console.log("invalid email");
            
        }
    }

    function handlePasswordInput(event){
         isPasswordValidate = validatePassword(event.target.value)
        if(isPasswordValidate){
            console.log("validPassword");
            authDispatch({
                type : "PASSWORD",
                payload: event.target.value
            })
            console.log("password sent");
        }else{
            console.log("invalid Password");
            
        }
    }

    function handleConfirmPasswordInput(event){
         isConfirmPasswordValidate = validateConfirmPassword(event.target.value)
        if(isConfirmPasswordValidate){
            console.log("validConfirmPassword");
            authDispatch({
                type : "CONFIRM_PASSWORD",
                payload: event.target.value
            })
            console.log("confirm password sent");
        }else{
            console.log("invalid confirmPassword");
        }
    }

    const handleSignupFormSubmit = (event)=>{
        event.preventDefault();
        try{
        if(isNameValidate &&
            isNumberValidate && 
            isEmailValidate && 
            isPasswordValidate && 
            isConfirmPasswordValidate){
            console.log("signup form submit"); 
           SignupService (username, mobileNumber, email, password )
        }else{
            console.log("inputs are not valid");
        }
       
        authDispatch({
            type : "TOGGLE_LOGIN"
        })
        authDispatch({
            type : "CLEAR_INPUT"
        })
        }catch(error){
            console.log("error in signup");
            
        }
    }
    return(
        <div className=" flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-1 sm:p-1 space-y-1 sm:space-y-1">
          <form onSubmit={handleSignupFormSubmit} className="space-x-2 space-y-[2px] sm:space-y-[2px">
            {/* Name Input */}
            <div className="space-y-1 space-x-2">
              <label className="space-x-2 block text-sm sm:text-base font-medium text-gray-700">
                Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <span className="material-symbols-outlined text-lg sm:text-xl">person</span>
                </span>
                <input
                  type="text"
                  maxLength="25"
                  required
                  defaultValue={username}
                  onChange={handleNameInput}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg
                    text-sm sm:text-base text-gray-700 placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
  
            {/* Mobile Number Input */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <span className="material-symbols-outlined text-lg sm:text-xl">phone</span>
                </span>
                <input
                  type="number"
                  maxLength="10"
                  required
                  defaultValue={mobileNumber}
                  onChange={handleNumberInput}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg
                    text-sm sm:text-base text-gray-700 placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
  
            {/* Email Input */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                </span>
                <input
                  type="email"
                  maxLength="25"
                  required
                  defaultValue={email}
                  onChange={handleEmailInput}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg
                    text-sm sm:text-base text-gray-700 placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
  
            {/* Password Input */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <span className="material-symbols-outlined text-lg sm:text-xl">lock</span>
                </span>
                <input
                  type="password"
                  minLength="8"
                  maxLength="16"
                  required
                  defaultValue={password}
                  onChange={handlePasswordInput}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg
                    text-sm sm:text-base text-gray-700 placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                  placeholder="Create a password"
                />
              </div>
            </div>
  
            {/* Confirm Password Input */}
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <span className="material-symbols-outlined text-lg sm:text-xl">lock_clock</span>
                </span>
                <input
                  type="password"
                  minLength="8"
                  maxLength="16"
                  required
                  defaultValue={confirmPassword}
                  onChange={handleConfirmPasswordInput}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg
                    text-sm sm:text-base text-gray-700 placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
  
            {/* Submit Button */}
            <div className="pt-4 sm:pt-2">
              <button
                type="submit"
                className="w-full py-1 sm:py-2.5 bg-primary text-white rounded-lg text-sm sm:text-base font-medium
                  hover:bg-primary/90 focus:ring-4 focus:ring-primary/20
                  transition-all duration-200"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  