import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";

import InputWithoutLabel from "@/src/common/components/forms/InputWithoutLabel";
import SubmitButton from "@/src/common/components/forms/SubmitButton";
import { neutral } from "@/src/common/config/colors";

const CreateCommentFields = ({ uploading }) => {
  const { values } = useFormikContext();
  return (
    <Box display="flex" flexDirection="column" rowGap={3}>
      <Box
        display="flex"
        px={3}
        width="100%"
        border="none"
        alignItems="center"
        bgcolor={neutral["A700"]}
        borderRadius={{ xs: 2, lg: 10 }}
      >
        <InputWithoutLabel
          name="text"
          type="text"
          placeholder="What's on your mind?"
          textFieldProps={{
            multiline: true,
            maxRows: 3,
            sx: {
              "& .MuiInputBase-root": {
                fontSize: { xs: 12, lg: 14 },
                fontWeight: 500,
                px: 0,
                py: { xs: "10px", sm: "12px" },
              },
              "& .MuiOutlinedInput-input": {
                boxSizing: "border-box",
                padding: "0px !important",
                color: neutral["A100"],
                "&::-webkit-scrollbar": {
                  display: "none", // Hide the scrollbar in Chrome, Safari, and Opera
                },
              },
            },
          }}
        />
      </Box>
      <Box>
        {values["text"] && (
          <SubmitButton
            type="submit"
            disabled={uploading}
            variant="contained"
            buttonProps={{
              sx: {
                borderRadius: 3,
                py: 0,
                px: 2,
                fontSize: 14,
                minWidth: 0,
                mx: 1,
                "&:hover": {
                  boxShadow: "none", // Remove box shadow on hover
                },
                "&:focus": {
                  boxShadow: "none", // Remove box shadow when focused
                },
                "&:active": {
                  boxShadow: "none", // Remove box shadow when active
                },
                "&:before": {
                  boxShadow: "none", // Remove ripple effect
                },
              },
            }}
          >
            Post
          </SubmitButton>
        )}
      </Box>
    </Box>
  );
};

export default CreateCommentFields;
