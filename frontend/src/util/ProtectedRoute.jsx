import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../modules/context/UserProvider";
import { useSnackbar } from "./SnackbarProvider";

const ProtectedRoute = () => {
  const { user } = useUser();
  const location = useLocation();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    console.log("user Data :::" , !user);
    
    if (!user) {
      showSnackbar("Please log in to continue.", "warning");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // ✅ Important: render nested routes via Outlet
  return <Outlet />;
};

export default ProtectedRoute;
