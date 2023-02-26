import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import InputField from "./InputField";

const CustomInput = ({ value, name, textFieldProps, type }) => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <InputField
      type={type}
      name={name}
      // placeholder={label}
      textFieldProps={{
        fullWidth: true,
        variant: "outlined",
        autoComplete: name,
        ...(textFieldProps || {}),
        sx: {
          width: { xs: "100%", sm: "90%" },
          "& .MuiInputBase-root": {
            fontSize: { xs: 14, md: 14 },
            padding: { xs: "10px", sm: "12px" },
            borderRadius: 2,
          },
          "& .MuiInputLabel-root": {
            top: value ? 0 : isDownSm ? -5 : -3,
            color: "#A2A2A2",
          },
          "& .Mui-focused": {
            top: 0,
            color: "#1976d2",
          },
          "& .MuiOutlinedInput-input": {
            padding: "0px !important",
            color: "#000000",
          },
          ...(textFieldProps?.sx || {}),
        },
      }}
    />
  );
};

export default CustomInput;
