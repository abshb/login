import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Container, Stack } from "@mui/system";
import { Alert, Button, FormControl, TextField } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [signupUser, setUsername] = useState("");
  const [signupEmail, setEmail] = useState("");
  const [signupPassword, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSignup = (event) => {
    const username = signupUser;
    const email = signupEmail;
    const password = signupPassword;

    const data = {
      email: email,
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:4000/users/signup", data)
      .then((response) => {
        console.log(response);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setLoginError(true);
        console.error(error);
      });
  };

  return (
    <Stack spacing={2} sx={{ minHeight: "100vh", bgcolor: "#fafafa" }}>
      <Container maxWidth="xl" sx={{ flex: "1", alignContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <form onSubmit={handleSignup}>
            <FormControl sx={{ minWidth: 350, gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  width: "100%",
                  bgcolor: "#fafafa",
                  justifyContent: "center",
                  marginBottom: 5,
                }}
              >
                <img src="../../../../assets/logo.svg" alt="logo" width={250} />
              </Box>
              <TextField
                label="Username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
                size="medium"
                required
              />
              <TextField
                label="Email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                size="medium"
                required
              />
              <TextField
                label="Password"
                type="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                size="medium"
                required
              />

              <Button type="submit" variant="contained" size="large">
                Signup
              </Button>
              <Button
                variant="text"
                size="large"
                onClick={() => navigate("/login")}
              >
                or Login
              </Button>
              {loginError && (
                <Alert severity="error">
                  Incorrect info. Please try again.
                </Alert>
              )}
            </FormControl>
          </form>
        </Box>
      </Container>
    </Stack>
  );
};

export default Signup;
