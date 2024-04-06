import React, { useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Alert, Button, FormControl, TextField } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [loginUser, setUsername] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.removeItem("access_token");
    const data = {
      username: loginUser,
      password: loginPassword,
    };
    axios
      .post(
        "devbase.cdusswgkwy6w.eu-north-1.rds.amazonaws.com/auth/login",
        data
      )
      .then((response) => {
        if (response.data.access_token) {
          const token = response.data.access_token;
          localStorage.setItem("access_token", token); // Store the token
          const decodedToken = jwtDecode(token);
          const deUsername = decodedToken.username;
          localStorage.setItem("username", deUsername);
          login(deUsername, token);
          navigate("/", { replace: true });
        } else {
          setLoginError(true);
          console.warn("Wrong data !");
        }
      })

      .catch((error) => {
        console.error(error);
      });
    return;
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
          <form onSubmit={handleLogin}>
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
                onClick={() => navigate("/signup")}
              >
                or Signup
              </Button>
              {loginError && (
                <Alert severity="error">
                  Incorrect username or password. Please try again.
                </Alert>
              )}
            </FormControl>
          </form>
        </Box>
      </Container>
    </Stack>
  );
};

export default Login;
