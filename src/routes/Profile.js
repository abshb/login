import { Breadcrumbs, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Stack>
      <Box sx={{ padding: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            <Typography>Home</Typography>
          </Link>
          <Typography color="text.primary">Profile</Typography>
        </Breadcrumbs>
      </Box>
      <Box>
        <Typography variant="h2">Profile Page</Typography>
      </Box>
    </Stack>
  );
};

export default Profile;
