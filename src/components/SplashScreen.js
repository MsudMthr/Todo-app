import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Circle from "../shared/Circle";

import splashScreenImage from "../assets/images/SplashScreen.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  subscribeSuccess,
  subscribeFailure,
} from "./../redux/subscribe/subscribeAction";

const SplashScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  return (
    <div>
      <Circle />
      <div className="mt-32 mb-4 flex flex-col items-center justify-center md:mt-20">
        <img src={splashScreenImage} alt="splash" className="md:w-64" />
        <h2 className="mt-9 text-lg font-semibold text-black/90 md:text-xl">
          Getting things done with TODO{" "}
        </h2>
        <p className="mt-7 w-60 text-center text-xs text-black/80 md:text-sm">
          Lörem ipsum ona telel och arat falogi krojaligt. Tejurat ick av
          triskapet. Brexit suprahibelt. Angen exodat lad, rerinde, den ryniren.
          Kombucha tide.{" "}
        </p>

        <button
          onClick={() => navigate("/signIn")}
          className="authButton mt-12"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
