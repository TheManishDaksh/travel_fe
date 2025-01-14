import axios from "axios";

const SignupService=async(username, mobileNumber, email, password)=>{
    try{
    const data = await axios.post("https://travelo-mhdr.onrender.com/api/auth/signup",{
        username : username,
        mobileNumber : mobileNumber,
        email : email,
        password : password
    })
    console.log(data);
    console.log("Signed up");
    alert("sign up");
    }catch(error){
        console.log(`error in signup - ${error}`); 
    }
}
export default  SignupService