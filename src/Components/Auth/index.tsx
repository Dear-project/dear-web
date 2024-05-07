"use client";

import React from "react";
import SignUpEmail from "./signup/Email";
import Login from "./login";

const Auth = () => {
  const login = localStorage.getItem("login");
  return <>{login === "true" ? <Login /> : <SignUpEmail />}</>;
};

export default Auth;
