import React from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import CustomInput from "@/src/common/components/forms/CustomInput";
import PasswordField from "@/src/common/components/forms/PasswordField";

const SignInFormFields = () => {
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
      <PasswordField
        name="password"
        value={values["password"]}
        textFieldProps={{ label: "Password", "aria-label": "Password" }}
      />
    </Box>
  );
};

export default SignInFormFields;
