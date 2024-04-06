import React from "react";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
        borderTop: 1,
        borderColor: "lightgray",
      }}
    ></Box>
  );
};

export default Footer;
