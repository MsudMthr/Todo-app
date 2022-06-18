import React, { useState } from "react";
//react router dom
import { useNavigate } from "react-router-dom";
//redux
import {
  subscribeSuccess,
  subscribeFailure,
} from "../redux/subscribe/subscribeAction";

import { useDispatch } from "react-redux";
//formik
import { useFormik } from "formik";
//firebase
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Circle from "../shared/Circle";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      if (values.email && values.password === values.confirmPassword) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((user) => {
            dispatch(subscribeSuccess(user));
            console.log(user);
            navigate("/dashboard", { replace: true });
          })
          .catch((error) => {
            dispatch(subscribeFailure(error.message));
          });
        setIsError(false);
        console.log();
      } else {
        setIsError(true);
      }
    },
  });

  return (
    <div>
      <Circle />
      <div className="mt-32 mb-4  flex flex-col items-center justify-center md:mt-20">
        <h1 className="text-lg font-semibold ">Welcome Onboard!</h1>
        <p className="mt-3 text-xs text-black/80">
          Let’s help you meet up your task
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-14 flex flex-col items-center md:mt-6"
        >
          <input
            id="email"
            className="authInput  mt-5"
            placeholder="enter your input"
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

          <input
            className="authInput mt-5"
            placeholder="confirm your password"
            name="confirmPassword"
            type="Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />

          <p className="mt-5 cursor-pointer text-[#38C24E]">Forgot password</p>

          <button type="submit" className="authButton mt-4">
            Register
          </button>
        </form>
        {isError && (
          <p className="mt-3 text-xs font-medium text-red-500/75">
            please complete form !
          </p>
        )}
        <p className="mt-3">
          Already have an account ?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-[#38C24E] "
          >
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Registration;
