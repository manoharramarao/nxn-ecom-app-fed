"use client";

import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Box, Container } from "@mui/material";

const HomeComponent = () => {
  const { accessToken } = useGlobalContext();
  return (
    <React.Fragment>
      <Container>
        {accessToken !== "" && <Box>User logged in! here is the access token ${accessToken}</Box>}
        {accessToken === "" && <Box>User is not logged in.</Box>}
      </Container>
    </React.Fragment>
  );
};

export default HomeComponent;
