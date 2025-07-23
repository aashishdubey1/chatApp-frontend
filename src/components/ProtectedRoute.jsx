import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./Loading";

const ProtectedRoute = () => {
  const { isAuthenticated,loading } = useAuth();
  console.log(isAuthenticated)

    if(loading) return <LoadingSpinner />

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;