import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector(
      (state) => state.authReducer.loggedInUser
    );
    if (!isAuthenticated.statusCode === 200) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
    return children;
  };