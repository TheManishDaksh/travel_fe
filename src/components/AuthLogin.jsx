import { validateNumber, validatePassword } from "../utils/validation"
import { useAuthContext } from "../context/AuthContext"
import loginService from "../Service"

export const AuthLogin = ()=>{

    let isNumberValidate, isPasswordValidate ;

    const {authDispatch, number, password} = useAuthContext()
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

    function handleLoginForm(event){
        event.preventDefault();
        if(isNumberValidate && isPasswordValidate){
            loginService(number, password)
        }
        authDispatch({
            type : "CLOSE_AUTH"
        })
    }
    return(
        <div className="w-[100%] p-4 text-slate-600">
            <form className="flex flex-col">
                <div  defaultValue={number}
                    onChange={handleNumberLogin} 
                    className="flex flex-col p-2">
                    <label> Mobile Number</label>
                    <input className=" border-b border-solid border-slate-200 outline-none text-base p-2 opacity-60" 
                    type="number" max='10' required />
                </div>

                <div defaultValue={password} 
                    onChange={handlePasswordLogin} >
                    <label> Password </label>
                    <input type="password" min='8' max='16' required />
                </div>

                <div onSubmit={handleLoginForm} 
                    className="w-[100%] p-4 mb-4">
                    <button>Login</button>
                </div>
            </form>
            <div>
                <button>
                    Login with Test Credentials
                </button>
            </div>
        </div>
    )
}