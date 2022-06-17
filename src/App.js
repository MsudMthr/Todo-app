import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import SplashScreen from "./components/SplashScreen";

function App() {
  return (
    <div className="bg-[#E5E5E5]">
      <div className="container relative min-h-screen overflow-hidden bg-[#E5E5E5]">
        <Routes>
          <Route path="/" element={<SplashScreen />}/>
          <Route path="signIn" element={<Registration />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
