"use client";

import React from "react";
import ProjAppBar from "../components/ProjAppBar";
import LoginComponent from "../components/Login";
import { GlobalContextProvider } from "../contexts/GlobalContext";

const LoginPage = () => {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <LoginComponent></LoginComponent>
    </React.Fragment>
  );
};

export default LoginPage;
