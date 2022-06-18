import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Circle from "../shared/Circle";
import {
  subscribeSuccess,
  subscribeFailure,
} from "../redux/subscribe/subscribeAction";

const Registration = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      if (
        values.email &&
        values.password === values.confirmPassword &&
        values.name
      ) {
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
            id="text"
            className="authInput"
            placeholder="enter your full name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

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
            Login
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
