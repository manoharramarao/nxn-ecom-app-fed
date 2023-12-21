"use client";

import { Box } from "@mui/material";
import React from "react";
import Register from "../components/Register";
import ProjAppBar from "../components/ProjAppBar";

const page = () => {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <Register></Register>
    </React.Fragment>
  );
};

export default page;
