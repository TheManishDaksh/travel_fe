import { validateName, validateEmail, validateNumber, validatePassword, validateConfirmPassword } from "../utils/validation" 
import { useAuthContext } from "../context/AuthContext"
import { SignupService } from "../Service/SignupService";

export const AuthSignup = ()=>{

    const {authDispatch, mobileNumber, password,confirmPassword, username, email} = useAuthContext();

    let isNameValidate, isEmailValidate, isNumberValidate, isPasswordValidate, isConfirmPasswordValidate
    function handleNameInput(event){
         isNameValidate = validateName(event.target.value)
        if(isNameValidate){
            console.log("validName");
            
            authDispatch({
                type : "NAME",
                payload: event.target.value
            })
        }else{
            console.log("invalid name");
            
        }
    }

    function handleNumberInput(event){
         isNumberValidate = validateNumber(event.target.value)
        if(isNumberValidate){
            console.log("validNumber");
            authDispatch({
                type : "NUMBER",
                payload: event.target.value
            })
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
        }else{
            console.log("invalid confirmPassword");
        }
    }

    function handleSignupFormSubmit(event){
        event.preventDefault();
        if(isNameValidate && isNumberValidate && isEmailValidate && isPasswordValidate){
            SignupService(username, mobileNumber, email, password)
        }
        authDispatch({
            type : "TOGGLE_LOGIN"
        })
    }
    return(
        <div className="w-[100%] p-4 text-slate-600">
            <form 
                className="flex flex-col">
                <div>
                    <label> Name</label>
                    <input defaultValue={username}
                    onChange={handleNameInput} 
                    type="text" required max='25'/>
                </div>
                <div>
                    <label> Mobile Number</label>
                    <input defaultValue={mobileNumber}
                    onChange={handleNumberInput}
                    type="number" max='10' required />
                </div>
                <div>
                    <label> Email </label>
                    <input defaultValue={email}
                    onChange={handleEmailInput}
                    type="text" max='25' required />
                </div>
                <div>
                    <label> Password </label>
                    <input defaultValue={password}
                    onChange={handlePasswordInput}
                    type="password" min='8' max='16' required />
                </div>
                <div>
                    <label> Confirm Password </label>
                    <input defaultValue={confirmPassword}
                    onChange={handleConfirmPasswordInput}
                    type="password" min='8' max='16' required />
                </div>
                <div onSubmit={handleSignupFormSubmit}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}