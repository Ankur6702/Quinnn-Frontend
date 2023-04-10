import React from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import CustomInput from "@/src/common/components/forms/CustomInput";
import SelectField from "@/src/common/components/forms/SelectField";
import PasswordField from "@/src/common/components/forms/PasswordField";
import { gender } from "../utils/helper";

const SignUpFormFields = () => {
  const { values } = useFormikContext();
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      rowGap={6}
      my={{ xs: 2, sm: 0 }}
    >
      <CustomInput
        name="mail"
        type="email"
        value={values["mail"]}
        textFieldProps={{ label: "Email", "aria-label": "Email" }}
      />
      <CustomInput
        name="name"
        type="text"
        value={values["name"]}
        textFieldProps={{ label: "Name", "aria-label": "Name" }}
      />
      <CustomInput
        name="username"
        type="text"
        value={values["username"]}
        textFieldProps={{ label: "Username", "aria-label": "Username" }}
      />
      <SelectField
        name="gender"
        label="Gender"
        inputLabelProps={{
          id: "gender",
        }}
        selectProps={{
          label: "Gender",
          sx: {
            fontSize: { xs: 14, md: 16 },
            borderRadius: 2,
            "& .MuiOutlinedInput-input": {
              p: "10px !important",
              color: "#000000",
            },
            "& .MuiInputBase-root": {
              fontSize: { xs: 14, md: 14 },
              padding: "12px",
            },
          },
        }}
        formControlProps={{
          fullWidth: true,
          variant: "outlined",
          sx: {
            width: { xs: "100%", sm: "90%" },
            "& .MuiInputLabel-root": {
              top: values["gender"] ? 0 : isDownSm ? -4 : -3.5,
              color: "#A2A2A2",
            },
            "& .Mui-focused": {
              top: 2,
              color: "#1976d2",
            },
          },
        }}
        items={gender}
      />
      <PasswordField
        name="password"
        value={values["password"]}
        textFieldProps={{ label: "Password", "aria-label": "Password" }}
      />
    </Box>
  );
};

export default SignUpFormFields;
