import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const SubmitButton = ({
  showDisableSpinner = true,
  buttonProps,
  boxProps,
  ...otherProps
}) => {
  const { disabled } = otherProps;

  return (
    <Box sx={{ position: "relative" }} {...(boxProps || {})}>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        disabled={disabled}
        {...otherProps}
        sx={{
          borderRadius: 2,
          height: { xs: 38, sm: "auto" },
          boxShadow: "none",
          bgcolor: "#4E97F5",
          "&:focus": {
            outline: "none",
          },
          ...(buttonProps?.sx || {}),
        }}
      >
        {otherProps.children}
        {disabled && (
          <CircularProgress
            size={24}
            sx={{
              color: "green[500]",
              position: "absolute",
              top: "50%",
              left: "50%",
              mt: -3,
              ml: -3,
            }}
          />
        )}
      </Button>
    </Box>
  );
};

export default SubmitButton;
