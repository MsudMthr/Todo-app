import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import { updateProfile } from "firebase/auth";
// component
import Time from "../shared/Clock";
import Circle from "./../shared/Circle";
import Todos from "./Todos";
import UserProfileImage from "./UserProfileImage";
import Logout from "./Logout";
import WriteTodo from "./WriteTodo";

const Dashboard = () => {
  const navigate = useNavigate();
  const [timeWishGood, setTimeWishGood] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isShowNameInput, setIsShowNameInput] = useState(false);

  const user = useSelector((state) => state.userState);
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

  
  const nameHandler = async () => {
    await updateProfile(user.user, {
      displayName,
    });
    window.location.reload(true);
  };
  console.log(user);

  const openInputHandler = () => {
    setIsShowNameInput(!isShowNameInput);
  };
  console.log(user.user.displayName);

  return (
    <div className="">
      <div className="flex h-[307px]  w-full flex-col items-center justify-center bg-[#38C24E]">
        <Logout />
        <Circle />

        <UserProfileImage user={user.user} />
        <div className="flex flex-col items-center">
          <p className="mt-5 flex  items-center text-lg font-semibold text-white">
            <p>
              Welcome{" "}
              <span className="mr-2 capitalize">
                {user.user.displayName && user.user.displayName}
              </span>{" "}
            </p>
            <button onClick={openInputHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </p>
          <div
            className={` relative transition ${!isShowNameInput && "scale-0"}`}
          >
            <input
              type="text"
              className={`"rounded-md ring-offset-2"  px-1 capitalize text-cyan-500 outline-none ring-2 ring-green-400 transition`}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <button className="absolute right-1 top-0.5" onClick={nameHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-indigo-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-9 flex  flex-col items-center">
        <p className=" absolute left-1/2 ml-16 text-sm font-semibold md:text-base">
          {timeWishGood}
        </p>
        <Time />
      </div>
      <Todos />
    </div>
  );
};

export default Dashboard;
