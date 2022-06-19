import { useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

//redux
import { useDispatch } from "react-redux/es/exports";
import { subscribeSuccess } from "./redux/subscribe/subscribeAction";
//components
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import SplashScreen from "./components/SplashScreen";

function App() {
  // const user = auth.currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    //
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(subscribeSuccess(user));
        navigate("/dashboard", { replace: true });
      }
    });
  }, []);
  return (
    <div className="bg-[#E5E5E5]">
      <div className="relative mx-auto min-h-screen max-w-screen-2xl overflow-hidden bg-[#E5E5E5]">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="signIn" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
