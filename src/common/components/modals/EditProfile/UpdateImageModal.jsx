import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

import UpdateImageFormFields from "./UpdateImageFormFields";
import { UpdateImageFormValidationSchema } from "../utils/helper";
import { Blues, Green, neutral } from "../../../config/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateImageModal = ({
  isOpen,
  handleClose,
  handleModalSubmit,
  url,
  handleUpdateImage,
}) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(url);
  const formikRef = useRef();

  const initialState = { image: null };
  console.log(url, imageUrl);

  // Handle updated image
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageUrl(null);
    handleUpdateImage(null);
    handleClose();
  };

  // Handle form submit
  const handleSubmit = (data, actions) => {
    imageUrl && handleUpdateImage(imageUrl);
    setImage(null);
    setImageUrl(null);
    handleClose();
  };

  const handleModalClose = () => {
    setImage(null);
    setImageUrl(null);
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleModalClose}
      aria-labelledby="form-dialog-title"
      sx={{
        "& .MuiDialog-container": {
          alignItems: { xs: "center", md: "flex-start" },
        },
        "& .MuiPaper-root": {
          borderRadius: 3,
          px: 1,
          pb: 1,
          minWidth: { xs: "90%", md: 580 },
          maxHeight: { xs: 350, md: 350 },
          height: { xs: "100%", md: "100%" },
        },
      }}
    >
      <DialogTitle sx={{ py: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 18, lg: 20 },
              color: neutral["800"],
              fontWeight: 500,
              opacity: 0.9,
            }}
          >
            Background Image
          </Typography>
          <IconButton
            aria-label="close"
            size="medium"
            onClick={handleModalClose}
          >
            <CloseIcon
              fontSize="medium"
              sx={{ color: neutral["800"], opacity: 0.8 }}
            />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider sx={{ opacity: 0.75, mx: 2 }} />
      <DialogContent sx={{ py: 3, display: "flex", flexDirection: "column" }}>
        <Box height="100%">
          <Formik
            initialValues={initialState}
            validationSchema={UpdateImageFormValidationSchema}
            onSubmit={handleSubmit}
            innerRef={formikRef}
          >
            {({ isSubmitting }) => (
              <Form style={{ height: "100%" }}>
                <UpdateImageFormFields
                  image={image}
                  imageUrl={imageUrl || url}
                  handleImageChange={handleImageChange}
                  handleRemoveImage={handleRemoveImage}
                />
              </Form>
            )}
          </Formik>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateImageModal;
