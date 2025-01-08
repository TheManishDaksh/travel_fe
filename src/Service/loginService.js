import axios from "axios";

 const loginService= async(mobileNumber, password)=>{

    try{
        const {data: accessToken, username} = await axios.post("http://localhost:3000/api/auth/login", {
            mobileNumber : mobileNumber,
            password : password
        })
        console.log("login successfully");
        console.log(username, accessToken);
        return {accessToken, username};
    }catch(error){
        console.log(`error in login-${error}`);
    }
    
}
export default loginService