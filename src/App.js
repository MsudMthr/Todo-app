import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import SplashScreen from "./components/SplashScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#E5E5E5]">
        <div className="max-w-screen-2xl mx-auto relative min-h-screen overflow-hidden bg-[#E5E5E5]">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="signIn" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
