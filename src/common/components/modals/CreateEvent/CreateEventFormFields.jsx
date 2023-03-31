import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
import CustomInput from "../../forms/CustomInput";
import InputWithoutLabel from "../../forms/InputWithoutLabel";
import { Blues, neutral } from "@/src/common/config/colors";
import SelectField from "../../forms/SelectField";
import { timesList } from "../utils/helper";
import { useMediaQuery, useTheme } from "@mui/material";



const CreateEventFormFields = ({
  image,
  imageUrl,
  handleRemoveImage,
  handleImageChange,
}) => {
  const { values, setValues } = useFormikContext();
  const [key, setKey] = useState(Date.now());
  const inputRef = useRef();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleDeleteImage = () => {
    fileInputRef.current.value = null;
    handleRemoveImage();
  };

  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      pt={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        rowGap={3}
        sx={{ position: "relative" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          rowGap={2}
          maxHeight="100%"
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
         <CustomInput
        name="eventName"
        type="text"
        value={values["eventName"]}
        textFieldProps={{
          label: "Event Name",
          "aria-label": "Event Name",
          sx: { width: { xs: "100%", sm: "100%" } },
        }}
      />
          <CustomInput
        name="eventDescription"
        type="text"
        value={values["eventDescription"]}
        textFieldProps={{
          multiline: true,
          minRows: 2,
          maxRows: 4,
          label: "About the Event",
          "aria-label": "About the Event",
          sx: { width: { xs: "100%", sm: "100%" } },
        }}
      />
          <Box
          display="flex"
          flexDirection="row"
          columnGap={2}
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
        <CustomInput
        name="startDate"
        type="date"
        value={values[""]}
        textFieldProps={{
          label: "Start Date",
          "aria-label": "Start Date",
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
        name="startTime"
        label="Start Time"
        inputLabelProps={{
          id: "startTime",
        }}
        selectProps={{
          label: "Start Time",
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
              top: values["time"] ? 0 : isDownSm ? -4 : -3.5,
              color: "#A2A2A2",
            },
            "& .Mui-focused": {
              top: 2,
              color: "#1976d2",
            },
          },
        }}
        items={timesList}
      />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          columnGap={2}
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
        <CustomInput
        name="endDate"
        type="date"
        value={values[""]}
        textFieldProps={{
          label: "End Date",
          "aria-label": "End Date",
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
        name="endTime"
        label="End Time"
        inputLabelProps={{
          id: "endTime",
        }}
        selectProps={{
          label: "End Time",
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
              top: values["time"] ? 0 : isDownSm ? -4 : -3.5,
              color: "#A2A2A2",
            },
            "& .Mui-focused": {
              top: 2,
              color: "#1976d2",
            },
          },
        }}
        items={timesList}
      />
        </Box>
          {image && (
            <Box sx={{ position: "relative" }}>
              <IconButton
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 20,
                  // bgcolor: "white",
                  border: "1px solid black",
                  p: 0,
                }}
                onClick={handleDeleteImage}
              >
                <CloseIcon />
              </IconButton>
              <CardMedia
                name="postImage"
                key={Date.now()}
                component="img"
                image={imageUrl}
                alt="Preview"
                sx={{
                  width: "100% !important",
                  border: 0.5,
                  borderColor: neutral["A200"],
                  borderRadius: { xs: 2, md: 4 },
                  p: 2,
                }}
              />
            </Box>
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ position: "relative", bottom: 0 }}
        >
          <Box display="flex" alignItems="center" columnGap={1}>
            <Input
              id="image-upload"
              ref={fileInputRef}
              key={key}
              name="postImage"
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={() => {
                handleImageChange(event);
                setKey(Date.now());
              }}
              sx={{ display: "none" }}
            />
            <Box>
              <label htmlFor="image-upload">
                <Button
                  component="span"
                  sx={{
                    color: neutral["A200"],
                    // textTransform:"none"
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                  endIcon={
                    <PublishIcon
                      sx={{ color: neutral["A200"], fontSize: 22 }}
                    />
                  }
                >
                  Upload Images
                </Button>
              </label>
            </Box>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={!values["eventName"]}
              sx={{ py: 1 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateEventFormFields;
