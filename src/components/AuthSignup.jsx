import { validateName, validateEmail, validateNumber, validatePassword } from "../utils/validation" 
import { useAuthContext } from "../context/AuthContext"

export const AuthSignup = ()=>{

    const {authDispatch, number, password, username, email} = useAuthContext();

    function handleNameInput(event){
        const isNameValidate = validateName(event.target.value)
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
        const isNumberValidate = validateNumber(event.target.value)
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
        const isEmailValidate = validateEmail(event.target.value)
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
        const isPasswordValidate = validatePassword(event.target.value)
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
        const isConfirmPasswordValidate = validatePassword(event.target.value)
        if(isConfirmPasswordValidate){
            console.log("validPassword");
            authDispatch({
                type : "PASSWORD",
                payload: event.target.value
            })
        }else{
            console.log("invalid confirmPassword");
            
        }
    }
    return(
        <div className="w-[100%] p-4 text-slate-600">
            <form className="flex flex-col">
                <div>
                    <label> Name</label>
                    <input defaultValue={username}
                    onChange={handleNameInput} 
                    type="text" required max='25'/>
                </div>
                <div>
                    <label> Mobile Number</label>
                    <input defaultValue={number}
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
                    <input defaultValue={password}
                    onChange={handleConfirmPasswordInput}
                    type="password" min='8' max='16' required />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}