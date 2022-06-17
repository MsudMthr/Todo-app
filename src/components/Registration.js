import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

import Circle from "../shared/Circle";


const Registration = () => {

    const [userData , setUserData] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:""
    })

    const navigate = useNavigate()
    const changeHandler = e => {
        setUserData({...userData ,  [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(userData);
    }

  return (
    <div >
      <Circle />
      <div className="mt-32 mb-4  flex flex-col items-center justify-center md:mt-20">
        <h1 className="font-semibold text-lg ">Welcome Onboard!</h1>
        <p className="text-xs text-black/80 mt-3">Let’s help you meet up your task</p>
        <form className="flex flex-col mt-10 gap-y-14 items-center" onSubmit={submitHandler}>
         <div className="flex flex-col gap-y-4">
            <input type="text" name="name" placeholder="Enter your full name" onChange={changeHandler} className="authInput"/>
            <input type="email" name="email" placeholder="Enter your email" onChange={changeHandler} className="authInput"/>
            <input type="password" name="password" placeholder="Enter password" onChange={changeHandler} className="authInput"/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={changeHandler} className="authInput"/>
         </div>
            <button type="submit" className="authButton">Register</button>
        </form>
        <p className="mt-3">Already have an account ? <span onClick={() => navigate("/login")} className="text-[#38C24E] cursor-pointer ">Login</span> </p>
        
      </div>
    </div>
  );
};

export default Registration;
