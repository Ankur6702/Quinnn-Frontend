import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import SubmitButton from "@/src/common/components/forms/SubmitButton";
import InputWithoutLabel from "@/src/common/components/forms/InputWithoutLabel";
import RichTextEditor from "./RichTextEditor";
import { neutral } from "@/src/common/config/colors";

const BlogFields = ({
  image,
  imageUrl,
  uploading,
  saveBlog,
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
      setFieldValue("coverImage", event.target.files[0]);
    }
    handleImageChange(event);
  };

  const handleDeleteImage = () => {
    fileInputRef.current.value = null;
    handleRemoveImage();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={2}
      height="100%"
      justifyContent="space-between"
    >
      <Box>
        <InputWithoutLabel
          name="title"
          type="text"
          placeholder="Title"
          textFieldProps={{
            multiline: true,
            // minRows: 2,
            inputRef: inputRef,
            sx: {
              "& .MuiInputBase-root": {
                fontSize: { xs: 24, md: 32 },
                fontWeight: 600,
                px: 0,
                py: { xs: "10px", sm: "12px" },
              },
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
        <input
          id="image-upload"
          ref={fileInputRef}
          key={key}
          name="coverImage"
          type="file"
          accept="image/*"
          onChange={(event) => {
            handleSubmit(event);
            setKey(Date.now());
          }}
          style={{ display: "none" }}
        />
        {image ? (
          <Box sx={{ position: "relative", mb: 3 }}>
            <IconButton
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
                // bgcolor: "white",
                border: "1px solid black",
                bgcolor: neutral[900],
                p: 0,
              }}
              onClick={handleDeleteImage}
            >
              <CloseIcon sx={{ color: neutral["A500"] }} />
            </IconButton>
            <CardMedia
              name="coverImage"
              key={Date.now()}
              component="img"
              image={imageUrl}
              alt="Preview"
              sx={{
                width: "100% !important",
                border: 0.5,
                borderColor: neutral["A200"],
                borderRadius: { xs: 1, md: 2 },
                p: 1,
              }}
            />
          </Box>
        ) : (
          <label htmlFor="image-upload">
            <Box
              sx={{
                mb: 3,
                py: 8,
                display: "flex",
                flexDirection: "column",
                rowGap: 1,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",

                cursor: "pointer",
                width: "100%",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  border: "6px dashed #BDBDBD",
                  top: "-4px",
                  bottom: "-4px",
                  left: "-4px",
                  right: " -4px",
                },
              }}
            >
              <AddPhotoAlternateIcon htmlColor="#BDBDBD" />
              <Typography
                variant="h6"
                sx={{
                  color: "#BDBDBD",
                }}
              >
                Upload Cover Image
              </Typography>
            </Box>
          </label>
        )}
        <RichTextEditor saveBlog={saveBlog} />
      </Box>
      <Box>
        {!values["title"] || !image ? (
          <Button
            type="submit"
            variant="contained"
            disabled={true}
            sx={{ py: 1 }}
          >
            Publish
          </Button>
        ) : (
          <SubmitButton
            type="submit"
            disabled={uploading}
            variant="contained"
            buttonProps={{ sx: { borderRadius: 1, py: 1 } }}
          >
            Publish
          </SubmitButton>
        )}
      </Box>
    </Box>
  );
};

export default BlogFields;
