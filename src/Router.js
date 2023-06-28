import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Components/Authentication/Login";
import { Signup } from "./Components/Authentication/Signup";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import { Layout } from "./layout";
import { ProtectedRoute } from "./protectedRoute";
import { useSelector } from "react-redux";
export const Router = () => {
const isAuthenticated = useSelector((state) => state.authReducer.loggedInUser);
    return (
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate replace to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate replace to={"/"} /> : <Signup />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Search"
          element={
            <ProtectedRoute>
              <Layout>
                <Search />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <Search />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    );
}