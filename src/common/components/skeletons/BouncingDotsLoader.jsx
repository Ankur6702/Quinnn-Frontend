import React from "react";
import { Box } from "@mui/material";
import { Blues } from "../../config/colors";

const BouncingDotsLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        "& > div": {
          display: "inline-block",
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: Blues["A100"],
          margin: "0 5px",
          animation: "bounce 0.5s infinite alternate",
        },
        "& > div:nth-of-type(1)": {
          animationDelay: "0ms",
        },
        "& > div:nth-of-type(2)": {
          animationDelay: "100ms",
        },
        "& > div:nth-of-type(3)": {
          animationDelay: "200ms",
        },
        "@keyframes bounce": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-20px)" },
        },
      }}
    >
      <Box component="div" />
      <Box component="div" />
      <Box component="div" />
    </Box>
  );
};

export default BouncingDotsLoader;
