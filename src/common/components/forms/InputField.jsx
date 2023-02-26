import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

const InputField = ({ placeholder, textFieldProps, type, ...inputProps }) => {
  const [field, meta] = useField(inputProps);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      type={type}
      variant="outlined"
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...(textFieldProps || {})}
    />
  );
};

export default InputField;
