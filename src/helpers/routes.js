import React from "react";
import { Navigate } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath, children }) => {
  return !user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: loggedInPath,
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, location }) => {
  return user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/signin",
        state: { from: location },
      }}
    />
  );
};
