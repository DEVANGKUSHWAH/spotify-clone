import { Routes, Route, element } from "react-router-dom";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";



export const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    );
}