"use client";

import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Box, Container } from "@mui/material";

const HomeComponent = () => {
  // TODO - create state for carousle image URLs and footer content

  // TODO - Create function to fetch carousel content from server

  // TODO - Create function to fetch footer content from server

  React.useEffect(() => {
    // TODO - call above functions to get carousel and footer content
  }, []);

  const { accessToken } = useGlobalContext();
  return (
    <React.Fragment>
      <Container>
        {accessToken !== "" && (
          <React.Fragment>
            {
              // TODO - create Carousel component
              // TODO - create contaner to main content
              // TODO - Include footer component after creating separate footer component
            }
            <Box>User logged in! here is the access token ${accessToken}</Box>
          </React.Fragment>
        )}
        {accessToken === "" && <Box>User is not logged in.</Box>}
      </Container>
    </React.Fragment>
  );
};

export default HomeComponent;
