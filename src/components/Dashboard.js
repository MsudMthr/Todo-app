import React, { useState, useEffect } from "react";
import Time from "../shared/Clock";
import Circle from "./../shared/Circle";
import avatar from "../assets/SVG/avatar.svg";
import Todos from "./Todos";
const Dashboard = () => {
  const [timeWishGood, setTimeWishGood] = useState("");
  const hour = new Date().getHours();
  useEffect(() => {
    if (hour >= 5 && hour < 12) {
      return setTimeWishGood("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      return setTimeWishGood("Good Afternoon");
    } else if (hour >= 18 && hour < 22) {
      return setTimeWishGood("Good Evening");
    } else if (hour < 5) {
      return setTimeWishGood("Good Night");
    } else if (hour >= 22) {
      return setTimeWishGood("Good Night");
    }
  }, [hour]);
  console.log(hour < 5);
  return (
    <div>
      <div className="flex h-[307px] w-full flex-col items-center justify-center bg-[#38C24E]">
        <Circle />
        <img src={avatar} alt="" className="w-28 rounded-full shadow-2xl" />
        <p className="mt-5 text-lg font-semibold text-white">
          Welcome Adams Uthman
        </p>
      </div>
      <div className="flex flex-col items-center  relative mt-9">
        <p className=" left-1/2 ml-16 absolute font-semibold text-sm md:text-base">{timeWishGood}</p>
        <Time />
      </div>
      <Todos />
    </div>
  );
};

export default Dashboard;
