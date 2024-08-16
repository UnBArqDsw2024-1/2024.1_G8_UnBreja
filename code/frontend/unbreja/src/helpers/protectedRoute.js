import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function ProtectedRoute({ element }) {  
  const { auth } = useAuth();

  if (!auth || !auth.token) {
    return <Navigate to="/login" replace />;
  }

  return element;
}
