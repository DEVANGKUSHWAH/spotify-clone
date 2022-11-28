import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('authenticatedUser')
    if (!isAuthenticated) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
    return children;
  };