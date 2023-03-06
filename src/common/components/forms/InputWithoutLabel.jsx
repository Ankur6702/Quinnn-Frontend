import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import InputField from "./InputField";

const InputWithoutLabel = ({ name, textFieldProps, type, placeholder }) => {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      textFieldProps={{
        fullWidth: true,
        autoComplete: name,
        ...(textFieldProps || {}),
        sx: {
          width: "100%",
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            fontSize: { xs: 14, md: 16 },
            padding: { xs: "10px", sm: "12px" },
            borderRadius: 2,
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

export default InputWithoutLabel;
