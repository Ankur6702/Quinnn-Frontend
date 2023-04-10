import React, { useState } from "react";
import { useField } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useMediaQuery, useTheme } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordField = ({
  placeholder,
  textFieldProps,
  value,
  ...inputProps
}) => {
  const [field, meta] = useField(inputProps);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      variant="outlined"
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      {...field}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end">
              {showPassword ? (
                <VisibilityOffIcon fontSize="small" />
              ) : (
                <VisibilityIcon fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...{
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

export default PasswordField;
