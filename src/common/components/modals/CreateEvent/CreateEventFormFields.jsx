import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import CustomInput from "../../forms/CustomInput";
import SelectField from "../../forms/SelectField";
import SubmitButton from "../../forms/SubmitButton";
import { timesList, typeOfEvent } from "../utils/helper";
import { useMediaQuery, useTheme } from "@mui/material";
import { neutral } from "@/src/common/config/colors";

const CreateEventFormFields = ({
  image,
  imageUrl,
  handleRemoveImage,
  handleImageChange,
  isSubmitting,
}) => {
  const { values, setFieldValue } = useFormikContext();
  const [key, setKey] = useState(Date.now());
  const inputRef = useRef();
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFieldValue("eventImage", event.target.files[0]);
    }
    handleImageChange(event);
  };

  const handleDeleteImage = () => {
    fileInputRef.current.value = null;
    handleRemoveImage();
  };
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      rowGap={6}
    >
      <input
        id="eventImage"
        ref={fileInputRef}
        key={key}
        name="eventImage"
        type="file"
        accept="image/*"
        onChange={(event) => {
          handleSubmit(event);
          setKey(Date.now());
        }}
        style={{ display: "none" }}
      />
      <label htmlFor="eventImage">
        <Box
          onClick={() => {}}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            height: 300,
            bgcolor: neutral["A400"],
            cursor: "pointer",
          }}
        >
          <AddAPhotoIcon
            fontSize="large"
            sx={{
              color: neutral["800"],
              width: 40,
              height: 40,
              opacity: 0.8,
              cursor: "pointer",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 14, lg: 16 },
              color: neutral["800"],
              fontWeight: 500,
              opacity: 0.8,
            }}
          >
            Upload cover image
          </Typography>
        </Box>
      </label>
      <Box display="flex" flexDirection="column" rowGap={6} px={6}>
        <CustomInput
          name="title"
          type="text"
          value={values["title"]}
          textFieldProps={{
            label: "Event name",
            "aria-label": "Event name",
            sx: { width: { xs: "100%", sm: "100%" } },
          }}
        />
        <CustomInput
          name="description"
          type="text"
          value={values["description"]}
          textFieldProps={{
            multiline: true,
            minRows: 2,
            maxRows: 4,
            label: "Event Description",
            "aria-label": "Event Description",
            sx: { width: { xs: "100%", sm: "100%" } },
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", rowGap: 6 }}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            columnGap={2}
            rowGap={6}
          >
            <CustomInput
              name="startDate"
              type="date"
              value={values[""]}
              textFieldProps={{
                label: "Start date",
                "aria-label": "Start date",
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
            <CustomInput
              name="startTime"
              type="time"
              value={values[""]}
              textFieldProps={{
                label: "Start time",
                "aria-label": "Start time",
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
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            columnGap={2}
            rowGap={6}
          >
            <CustomInput
              name="endDate"
              type="date"
              value={values[""]}
              textFieldProps={{
                label: "End date",
                "aria-label": "End date",
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
            <CustomInput
              name="endTime"
              type="time"
              value={values[""]}
              textFieldProps={{
                label: "End time",
                "aria-label": "End time",
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
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 14, lg: 16 },
                color: neutral["600"],
                fontWeight: 500,
                opacity: 0.8,
              }}
            >
              Event Type
            </Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="isOnline"
              value={values["isOnline"]}
              onChange={(event) =>
                setFieldValue("isOnline", event.target.value)
              }
              sx={{ display: "flex", flexDirection: "row", columnGap: 3 }}
            >
              {typeOfEvent.map((type, index) => (
                <FormControlLabel
                  key={index}
                  value={type.value}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      color={neutral["600"]}
                      fontSize={16}
                    >
                      {type.label}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
            <Box mt={3}>
              {values.isOnline == "Offline" ? (
                <CustomInput
                  name="location"
                  type="text"
                  value={values["location"] || ""}
                  textFieldProps={{
                    label: "Location",
                    "aria-label": "Location",
                    sx: { width: { xs: "100%", sm: "100%" } },
                  }}
                />
              ) : (
                <CustomInput
                  name="meetingLink"
                  type="text"
                  value={values["meetingLink"] || ""}
                  textFieldProps={{
                    label: "Meeting Link",
                    "aria-label": "Meeting Link",
                    sx: { width: { xs: "100%", sm: "100%" } },
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{ position: "relative", bottom: 0, px: 6 }}
      >
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          buttonProps={{ sx: { borderRadius: 1, py: 1 } }}
        >
          Create
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default CreateEventFormFields;
