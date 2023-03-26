import React, { useRef, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from "@mui/icons-material/Delete";

import SubmitButton from "../../forms/SubmitButton";
import { neutral } from "@/src/common/config/colors";
import { BANNER_IMAGE } from "@/src/profile/utils/constants";

const UpdateBannerFormFields = ({
  imageUrl,
  uploading,
  handleRemoveImage,
  handleImageChange,
}) => {
  const [key, setKey] = useState(Date.now());
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFieldValue("image", event.target.files[0]);
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
          <Box sx={{ position: "relative" }}>
            <CardMedia
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
            {errors.image && touched.image && (
              <Typography
                variant="h6"
                sx={{
                  width: "auto",
                  color: "red",
                  fontWeight: 300,
                  fontSize: { xs: 12, lg: 14 },
                }}
              >
                {errors.image}
              </Typography>
            )}
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
            <input
              id="banner-image"
              ref={fileInputRef}
              key={key}
              name="image"
              type="file"
              accept="image/*"
              onChange={(event) => {
                handleSubmit(event);
                setKey(Date.now());
              }}
              style={{ display: "none" }}
            />

            <Box>
              <label htmlFor="banner-image">
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
            <SubmitButton
              type="submit"
              disabled={uploading}
              variant="contained"
            >
              Save
            </SubmitButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateBannerFormFields;
