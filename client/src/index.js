import React from "react";
import ReactDOM from "react-dom";
import { SignupForm } from "./App"; // Import SignupForm instead of App

ReactDOM.render(
  <React.StrictMode>
    <SignupForm />
  </React.StrictMode>,
  document.getElementById("root")
);
