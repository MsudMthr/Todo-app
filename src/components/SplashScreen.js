import { useNavigate } from "react-router-dom";

import Circle from "../shared/Circle";

import splashScreenImage from "../assets/images/SplashScreen.png";

const SplashScreen = () => {


  return (
    <div>
      <Circle />
      <div className="flex flex-col items-center justify-center mt-32 md:mt-20">
        <img src={splashScreenImage} alt="splash" className="md:w-64" />
        <h2 className="mt-9 text-lg text-black/90 md:text-xl font-semibold">
          Getting things done with TODO{" "}
        </h2>
        <p className="w-60 text-center text-xs md:text-sm text-black/80 mt-7">
          Lörem ipsum ona telel och arat falogi krojaligt. Tejurat ick av
          triskapet. Brexit suprahibelt. Angen exodat lad, rerinde, den ryniren.
          Kombucha tide.{" "}
        </p>
        
        <button  className="bg-[#38c24e] text-white w-[325px] h-[60px] mt-12 rounded-lg font-semibold text-lg " >  
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
