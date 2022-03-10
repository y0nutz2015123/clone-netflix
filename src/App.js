import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import { useAuthListener } from "./hooks";

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import { HomePage, BrowsePage, SignInPage, SignUpPage } from "./pages";

function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <HomePage />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <BrowsePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <SignInPage />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <SignUpPage />
            </IsUserRedirect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
