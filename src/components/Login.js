import React, { useState } from "react";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

import Circle from "../shared/Circle";
import loginImage from "../assets/images/Login.png";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.email && values.password) {
        
        setIsError(false);
      } else {
        setIsError(true);
      }
    },
  });

  const navigate = useNavigate();

  return (
    <div>
      <Circle />
      <div className="mt-32 mb-4  flex flex-col items-center justify-center md:mt-10">
        <h1 className="mb-7 text-lg font-semibold">Welcome Back!</h1>
        <img src={loginImage} alt="Login" className="" />

        <form
          onSubmit={formik.handleSubmit}
          className="mt-14 flex flex-col items-center md:mt-6"
        >
          <input
            id="email"
            className="authInput"
            placeholder="enter your email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            id="password"
            className="authInput mt-5"
            placeholder="enter your password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <p className="mt-5 cursor-pointer text-[#38C24E]">Forgot password</p>

          <button type="submit" className="authButton mt-4">
            Login
          </button>
        </form>
        {isError && (
          <p className="mt-3 text-xs font-medium text-red-500/75">
            please complete form !
          </p>
        )}
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
