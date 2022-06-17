import React,{useState} from "react";

import { useNavigate } from "react-router-dom";

import Circle from "../shared/Circle";
import loginImage from "../assets/images/Login.png";

const Login = () => {

    const [userLoginData , setUserLoginData ] = useState({
        email :"",
        password: ""
    })

  const navigate = useNavigate();

  const changeHandler = e => {
    setUserLoginData({...userLoginData , [e.target.type] : e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(userLoginData);
  }

  return (
    <div>
      <Circle />
      <div className="mt-32 mb-4  flex flex-col items-center justify-center md:mt-10">
        <h1 className="mb-7 font-semibold text-lg">Welcome Back!</h1>
        <img src={loginImage} alt="Login" className=""/>
        <form className="flex flex-col items-center mt-14 md:mt-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-5">
            <input type="email"  onChange={changeHandler}  className="authInput" placeholder="Enter your email"/>
            <input type="password"  onChange={changeHandler}  className="authInput" placeholder="Enter your password"/>
          </div>
          <p className="mt-5 text-[#38C24E] cursor-pointer">Forgot password</p>
          <button className="authButton mt-4">Login</button>
        </form>
        <p className="mt-3">
          Don’t have an account ?{" "}
          <span
            onClick={() => navigate("/signIn")}
            className="cursor-pointer text-[#38C24E] "
          >
            Sign In
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
