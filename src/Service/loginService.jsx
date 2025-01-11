import axios from "axios";

 const loginService= async(mobileNumber, password)=>{

    try{
        const {data: accessToken, username} = await axios.post("https://travelo-mhdr.onrender.com/api/auth/login", {
            mobileNumber : mobileNumber,
            password : password
        })
        console.log("login successfully");
        console.log(username, accessToken);
        localStorage.setItem("token", accessToken);
        localStorage.setItem("username", username);
        return {accessToken, username};
    }catch(error){
        console.log(`error in login-${error}`);
    }
}
export default loginService