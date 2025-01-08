import axios from "axios";

export const loginService= async(number, password)=>{

    try{
        const {data: accessToken, username} = await axios.post("http://localhost:3000/api/auth/register", {
            number : number,
            password : password
        })
        console.log("login successfully");
        console.log(username, accessToken);
        return {accessToken, username};
    }catch(error){
        console.log(`error in login-${error}`);
    }
    
}