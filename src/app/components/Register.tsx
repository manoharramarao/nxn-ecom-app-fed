import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import ProjAppBar from "./ProjAppBar";

const Register = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={12}>
            <Typography variant="h4">Register</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="For demo use: admin@example.com " variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="For demo use: admin@example.com " variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="For demo use: admin@example.com " variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="For demo use: admin@example.com " variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={2.75}>
            <Typography>Already have an account?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" underline="hover">
              {"Login"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Register;
