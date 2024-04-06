import React from "react";
import { Outlet } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { Container } from "@mui/system";

function App() {
  return (
    <Stack spacing={2} sx={{ minHeight: "100vh", bgcolor: "#fafafa" }}>
      <Header />
      <Container maxWidth="xl" sx={{ flex: "1" }}>
        <h1>Test Changes</h1>
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;
