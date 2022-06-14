import { Routes, Route, element } from "react-router-dom";
import { Login } from "./Components/Authentication/Login";
import { Signup } from "./Components/Authentication/Signup";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import { Layout } from "./layout";
export const Router = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
      </Routes>
    );
}