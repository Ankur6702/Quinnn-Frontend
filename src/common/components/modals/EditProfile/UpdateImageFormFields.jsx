import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from "@mui/icons-material/Delete";

import InputWithoutLabel from "../../forms/InputWithoutLabel";
import { neutral } from "@/src/common/config/colors";
import { BANNER_IMAGE } from "@/src/profile/utils/constants";

const UpdateImageFormFields = ({
  image,
  imageUrl,
  handleRemoveImage,
  handleImageChange,
}) => {
  const [key, setKey] = useState(Date.now());
  const inputRef = useRef();
  const fileInputRef = useRef(null);
  console.log(imageUrl);

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
          <Box sx={{ position: "relative" }}>
            <CardMedia
              name="image"
              key={Date.now()}
              component="img"
              image={imageUrl || BANNER_IMAGE}
              alt="Preview"
              sx={{
                width: 524,
                height: 150,
                border: 0.5,
                borderColor: neutral["A200"],
                borderRadius: { xs: 2, md: 2 },
                p: 1,
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap={3}
          sx={{ position: "relative", bottom: 0 }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            columnGap={2}
          >
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
                  Upload
                </Button>
              </label>
            </Box>
            <Box>
              <Button
                component="span"
                onClick={handleDeleteImage}
                sx={{
                  color: neutral["A200"],
                  // textTransform:"none"
                  fontSize: 14,
                  fontWeight: 600,
                }}
                endIcon={
                  <DeleteIcon sx={{ color: neutral["A200"], fontSize: 22 }} />
                }
              >
                Delete
              </Button>
            </Box>
          </Box>
          <Box>
            <Button type="submit" variant="contained" sx={{ py: 1 }}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateImageFormFields;
