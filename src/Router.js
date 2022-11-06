import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Components/Authentication/Login";
import { Signup } from "./Components/Authentication/Signup";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import { Layout } from "./layout";
export const Router = () => {
  const isAuthenticated = localStorage.getItem('authenticatedUser')
    return (
      <Routes>
        <Route path="/login" element={isAuthenticated?
            <Navigate replace to = {"/"}/>:<Login/>} />
        <Route path="/signup" element={isAuthenticated?
            <Navigate replace to = {"/"}/>:<Signup />} />
        <Route
          path="/"
          element = {
              isAuthenticated?
            <Layout>
              <Home />
            </Layout>:<Navigate replace to={"/login"} />
          }
        />
        <Route
          path="/Search"
          element={
              isAuthenticated?
            <Layout>
              <Search />
            </Layout>:<Navigate replace to={"/login"}/>
          }
        />
      </Routes>
    );
}