import { Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
// import cookie from "cookie-cutter";

const LoginComponent = () => {
  const [result, setResult] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const { setUsername, setAccessToken } = useGlobalContext();
  const router = useRouter();
  var cookie = require("cookie-cutter");

  /**
   *
   * @param user
   */
  const login = async (user: any) => {
    const url = "http://localhost:3001/login";
    try {
      const response = await axios.post(url, user);
      cookie.set("access_token", response.data.token);
      setAccessToken(response.data.token);
      setUsername(response.data.username);
      router.push("/");
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        setResult("");
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "password must be 6 characters or more").required("Password is required"),
    }),
    onSubmit: async (values) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      // }, 5000);
      // alert(JSON.stringify(values, null, 2));
      await login(values);
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Grid container spacing={2} pt={2} px={{ md: 25 }}>
            <Grid item xs={12}>
              <Typography variant="h4">Login</Typography>
            </Grid>
            {result && (
              <Grid item xs={12} color={"green"}>
                <Typography variant="h6">{result}</Typography>
              </Grid>
            )}
            {error && (
              <Grid item xs={12} color={"red"}>
                <Typography variant="h6">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} pt={2} px={{ sm: 25 }}>
            <Grid item sm={2.75}>
              <Typography>Already have an account?</Typography>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" underline="hover">
                {"Login"}
              </Link>
            </Grid>
          </Grid>
        </Container>
      </form>
    </React.Fragment>
  );
};

export default LoginComponent;
