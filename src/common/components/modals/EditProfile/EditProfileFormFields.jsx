import React from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import CustomInput from "../../forms/CustomInput";
import SelectField from "../../forms/SelectField";
import { status, countryList } from "../utils/helper";
import SubmitButton from "../../forms/SubmitButton";

const EditProfileFormFields = ({ isSubmitting }) => {
  const { values } = useFormikContext();
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      pt={6}
      boxSizing="content-box"
      rowGap={6}
    >
      <CustomInput
        name="name"
        type="text"
        value={values["name"]}
        textFieldProps={{
          label: "Name",
          "aria-label": "Name",
          sx: { width: { xs: "100%", sm: "100%" } },
        }}
      />
      <CustomInput
        name="username"
        type="text"
        value={values["username"]}
        textFieldProps={{
          label: "Username",
          "aria-label": "Username",
          sx: { width: { xs: "100%", sm: "100%" } },
        }}
      />
      <CustomInput
        name="bio"
        type="text"
        value={values["bio"]}
        textFieldProps={{
          multiline: true,
          minRows: 2,
          maxRows: 4,
          label: "Bio",
          "aria-label": "Bio",
          sx: { width: { xs: "100%", sm: "100%" } },
        }}
      />
      <SelectField
        name="country"
        label="Location"
        inputLabelProps={{
          id: "Location",
        }}
        selectProps={{
          label: "Location",
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
            width: { xs: "100%", sm: "100%" },
            "& .MuiInputLabel-root": {
              top: values["country"] ? 0 : isDownSm ? -4 : -3.5,
              color: "#A2A2A2",
            },
            "& .Mui-focused": {
              top: 2,
              color: "#1976d2",
            },
          },
        }}
        items={countryList}
      />
      <CustomInput
        name="dob"
        type="date"
        value={values[""]}
        textFieldProps={{
          label: "Date of birth",
          "aria-label": "Date of birth",
          InputLabelProps: {
            shrink: true,
          },
          sx: {
            width: { xs: "100%", sm: "100%" },
            "& .MuiInputLabel-root": {
              top: 0,
              color: "#A2A2A2",
            },
          },
        }}
      />

      <SelectField
        name="isPrivate"
        label="Privacy"
        inputLabelProps={{
          id: "isPrivate",
        }}
        selectProps={{
          label: "Privacy",
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
            width: { xs: "100%", sm: "100%" },
            "& .MuiInputLabel-root": {
              top: 0,
              color: "#A2A2A2",
            },
            "& .Mui-focused": {
              top: 2,
              color: "#1976d2",
            },
          },
        }}
        items={status}
      />
      <Box display="flex" justifyContent="flex-end" width="100%">
        <SubmitButton type="submit" disabled={isSubmitting} variant="contained">
          Save
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default EditProfileFormFields;
