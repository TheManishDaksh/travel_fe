import { validateNumber, validatePassword } from "../utils/validation"
import { useAuthContext } from "../context/AuthContext"


export const AuthLogin = ()=>{

    const {authDispatch, number, password} = useAuthContext()
    function handleNumberLogin(event){
        const isNumberValidate = validateNumber(event.target.value)
        console.log(isNumberValidate);
        
        if(isNumberValidate){
            authDispatch({
                type : "NUMBER",
                payload: event.target.value
            })
        }else{
            console.log("invalid number");
            
        }
    }

    function handlePasswordLogin(event){
        const isPasswordValidate = validatePassword(event.target.value)
        if(isPasswordValidate){
            authDispatch({
                type : "PASSWORD",
                payload: event.target.value
            })
        }else{
            console.log("invalid Password");
            
        }
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

                <div className="w-[100%] p-4 mb-4">
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