import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DialogContent from "@mui/material/DialogContent";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

import Viewership from "./Viewership";
import CreatePostFormFields from "./CreatePostFormFields";
import { CreatePostFormValidationSchema } from "../utils/helper";
import { Blues, Green, neutral } from "../../../config/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreatePostModal = ({ isOpen, handleClose, handleModalSubmit }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [status, setStatus] = useState("Anyone");
  const [anchorEl, setAnchorEl] = useState(null);
  const formikRef = useRef();

  const initialState = {
    postText: "",
  };

  // viewership dropdown
  const openViewership = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeViewership = () => {
    setAnchorEl(null);
  };
  const handleViewershipChange = (e) => {
    setStatus(e);
  };

  // Handle posted image
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
    setImageUrl(null);
  };

  // Handle form submit
  const handlePostSubmit = (data, actions) => {
    const { postText } = data;
    setImage(null);
    setImageUrl(null);
    actions.resetForm();
  };

  const handleModalClose = () => {
    setImage(null);
    setStatus("Anyone");
    setImageUrl(null);
    formikRef.current.resetForm();
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
          maxHeight: { xs: 400, md: 450 },
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
            Create a Post
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
        <Box display="flex" columnGap={3} alignItems="center">
          <Avatar
            alt="profile-photo"
            sx={{
              width: 50,
              height: 50,
              fontSize: 15,
              cursor: "pointer",
              position: "relative",
            }}
          >
            <PersonRoundedIcon sx={{ fontSize: 32, color: neutral["A500"] }} />
          </Avatar>
          <Box display="flex" flexDirection="column" rowGap={2}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 14, lg: 16 },
                color: neutral["900"],
                fontWeight: 500,
                opacity: 0.6,
              }}
            >
              Rajat Singh
            </Typography>
            <Box display="flex">
              <Typography
                variant="h4"
                display="flex"
                alignItems="center"
                columnGap={1}
                component="button"
                onClick={openViewership}
                sx={{
                  fontSize: { xs: 12, lg: 14 },
                  color: status == "Anyone" ? Blues["A100"] : Green["A100"],
                  fontWeight: 500,
                  opacity: 0.6,
                  px: 2,
                  py: 0,
                  borderRadius: 4,
                  cursor: "pointer",
                  border: 1,
                }}
              >
                {status}
                <KeyboardArrowDownIcon />
              </Typography>
              <Viewership
                anchorEl={anchorEl}
                handleMenuClose={closeViewership}
                handleStatusChange={handleViewershipChange}
              />
            </Box>
          </Box>
        </Box>
        <Box height="80%">
          <Formik
            initialValues={initialState}
            validationSchema={CreatePostFormValidationSchema}
            onSubmit={handlePostSubmit}
            innerRef={formikRef}
          >
            {({ isSubmitting }) => (
              <Form style={{ height: "100%" }}>
                <CreatePostFormFields
                  image={image}
                  imageUrl={imageUrl}
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
export default CreatePostModal;
{
  /* <form onSubmit={handleSubmit}>
         
        </form> */
}
