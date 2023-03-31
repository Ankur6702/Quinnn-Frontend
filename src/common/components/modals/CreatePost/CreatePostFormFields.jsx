import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";

import InputWithoutLabel from "../../forms/InputWithoutLabel";
import { neutral } from "@/src/common/config/colors";
import SubmitButton from "../../forms/SubmitButton";

const CreatePostFormFields = ({
  image,
  imageUrl,
  uploading,
  handleRemoveImage,
  handleImageChange,
}) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
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

  const handleSubmit = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFieldValue("postImage", event.target.files[0]);
    }
    handleImageChange(event);
  };

  const handleDeleteImage = () => {
    fileInputRef.current.value = null;
    handleRemoveImage();
  };

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
          maxHeight="80%"
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <InputWithoutLabel
            name="postText"
            type="text"
            placeholder="What's on your mind?"
            textFieldProps={{
              multiline: true,
              minRows: 2,
              inputRef: inputRef,
              sx: {
                "& .MuiOutlinedInput-input": {
                  boxSizing: "border-box",
                  padding: "0px !important",
                  color: "#000000",
                  "&::-webkit-scrollbar": {
                    display: "none", // Hide the scrollbar in Chrome, Safari, and Opera
                  },
                },
              },
            }}
          />
          {image && (
            <Box sx={{ position: "relative" }}>
              <IconButton
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 10,
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
            <input
              id="image-upload"
              ref={fileInputRef}
              key={key}
              name="postImage"
              type="file"
              accept="image/*"
              onChange={(event) => {
                handleSubmit(event);
                setKey(Date.now());
              }}
              style={{ display: "none" }}
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
                  Upload
                </Button>
              </label>
            </Box>
          </Box>
          <Box>
            {!values["postText"] && !image ? (
              <Button
                type="submit"
                variant="contained"
                disabled={!values["postText"] && !image}
                sx={{ py: 1 }}
              >
                Post
              </Button>
            ) : (
              <SubmitButton
                type="submit"
                disabled={uploading}
                variant="contained"
                buttonProps={{ sx: { borderRadius: 1, py: 1 } }}
              >
                Post
              </SubmitButton>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePostFormFields;
