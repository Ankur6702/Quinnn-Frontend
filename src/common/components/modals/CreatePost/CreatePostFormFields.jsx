import React, { useEffect, useRef } from "react";
import ImageIcon from "@mui/icons-material/Image";
import {
  Grid,
  Box,
  TextField,
  Card,
  Typography,
  IconButton,
  CardActions,
  Input,
  Button,
  CardMedia,
  OutlinedInput,
  CardContent,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormikContext } from "formik";
import InputWithoutLabel from "../../forms/InputWithoutLabel";
import { neutral } from "@/src/common/config/colors";

const CreatePostFormFields = ({
  image,
  imageUrl,
  handleRemoveImage,
  handleImageChange,
}) => {
  const { values } = useFormikContext();
  const inputRef = useRef();
  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [image, imageUrl]);

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
                sx={{ position: "absolute", right: 10, top: 5 }}
                onClick={handleRemoveImage}
              >
                <CloseIcon />
              </IconButton>
              <CardMedia
                component="img"
                image={imageUrl}
                alt="Preview"
                sx={{
                  width: "100% !important",
                  border: 0.5,
                  borderColor: neutral["A200"],
                  borderRadius: 4,
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
              name="postImage"
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={handleImageChange}
              sx={{ display: "none" }}
            />
            <label htmlFor="image-upload">
              <IconButton component="span">
                <CameraAltIcon sx={{ color: neutral["A200"], fontSize: 24 }} />
              </IconButton>
            </label>

            <IconButton>
              <TagFacesIcon sx={{ color: neutral["A200"], fontSize: 24 }} />
            </IconButton>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={!values["postText"] && !image}
              sx={{ py: 1 }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePostFormFields;
