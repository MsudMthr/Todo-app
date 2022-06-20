import React, { useState, useEffect } from "react";
import { upload } from "../firebase";

import avatar from "../assets/SVG/avatar.svg";

const UserProfileImage = ({ user }) => {
  const [profileImage, setProfileImage] = useState();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShowElement, setIsShoeElement] = useState({
    fileInput: true,
    uploadButton: false,
  });
  useEffect(() => {
    if (user?.photoURL) {
      setProfileImage(user.photoURL);
    } else {
      setProfileImage(avatar);
    }
    setIsShoeElement({ fileInput: true });
  }, [user]);
  const changeHandler = (e) => {
    if (e.target.files[0]) setPhoto(e.target.files[0]);
    setIsShoeElement({ fileInput: false, uploadButton: true });
  };
  const uploadPhotoHandler = () => {
    upload(photo, user, setLoading);
    setIsShoeElement({ uploadButton: false });
  };

  return (
    <div className="relative ">
      <img src={profileImage} alt="" className="w-28 rounded-full shadow-2xl p-1 " />
      {isShowElement.uploadButton && (
        <button
          onClick={uploadPhotoHandler}
          className="absolute bottom-0 left-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </button>
      )}
      {isShowElement.fileInput && (
        <label htmlFor="uploadImage" className="absolute bottom-0 right-0  ">
          <input
            type="file"
            name=""
            id="uploadImage"
            className="hidden"
            onChange={changeHandler}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </label>
      )}
    </div>
  );
};

export default UserProfileImage;
