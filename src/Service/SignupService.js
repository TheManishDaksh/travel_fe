import axios from "axios";

 const SignupService=async(username, mobileNumber, email, password)=>{
    try{
    const data = await axios.post("http://localhost:3000/api/auth/signup",{
        username : username,
        mobileNumber : mobileNumber,
        email : email,
        password : password
    })
    console.log(data);
    console.log("Signed up");
    }catch(error){
        console.log(`error in signup - ${error}`); 
    }
}

export default SignupService    