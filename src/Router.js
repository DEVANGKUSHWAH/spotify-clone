import { Routes, Route, element } from "react-router-dom";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Search" element={<Search/>}/>
        </Routes>
    )
}