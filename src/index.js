import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { firebase } from "./lib/firebase";

import { FirebaseContext } from "./context/firebase.context";

import App from "./App";

import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
