import axios from "axios";

export const SignupService=async (username, number, email, password)=>{
    try{
    const data = await axios.post("http://localhost:3000/api/auth/register",{
        username : username,
        number : number,
        email : email,
        password : password
    })
    console.log("Signed up");
    console.log(data);
    
    }catch(error){
        console.log(`error in signup - ${error}`); 
    }
}