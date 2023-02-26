import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { useField } from "formik";

const SelectField = ({
  items,
  label,
  formControlProps,
  inputLabelProps,
  selectProps,
  menuItemProps,
  formHelperTextProps,
  overrideMenuItems,
  ...props
}) => {
  const [field, meta] = useField({ ...props, type: "select" });
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FormControl error={!!errorText} {...formControlProps}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} error={!!errorText} {...(selectProps || {})}>
        {overrideMenuItems
          ? selectProps?.children
          : items?.map(({ label, value }, index) => (
              <MenuItem key={index} value={value} {...(menuItemProps || {})}>
                {label}
              </MenuItem>
            ))}
      </Select>
      {meta.touched && meta.error ? (
        <FormHelperText error={!!errorText} {...(formHelperTextProps || {})}>
          {meta.error}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default SelectField;
