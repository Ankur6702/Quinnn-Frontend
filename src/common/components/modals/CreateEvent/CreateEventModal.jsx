import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
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

import CreateEventFormFields from "./CreateEventFormFields";
// import { CreateEventFormValidationSchema } from "../utils/helper";
import { Blues, Green, neutral } from "../../../config/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateEventModal = ({ isOpen, handleClose, handleModalSubmit }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const formikRef = useRef();

  const initialState = {
    title: "",
    description: "",
    isOnline: "Online",
    location: "",
    meetingLink: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    eventImage: "",
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
    const {
      title,
      description,
      isOnline,
      location,
      meetingLink,
      startDate,
      startTime,
      endDate,
      endTime,
      eventImage,
    } = data;
    console.log(data);
    setImage(null);
    setImageUrl(null);
    // actions.resetForm();
  };

  const handleModalClose = () => {
    setImage(null);
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
          px: 0,
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
            Create an Event
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
      <DialogContent
        sx={{ py: 3, px: 0, display: "flex", flexDirection: "column" }}
      >
        <Box
          height="100%"
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Formik
            initialValues={initialState}
            // validationSchema={CreateEventFormValidationSchema}
            onSubmit={handlePostSubmit}
            innerRef={formikRef}
          >
            {({ isSubmitting }) => (
              <Form>
                <CreateEventFormFields
                  image={image}
                  imageUrl={imageUrl}
                  isSubmitting={isSubmitting}
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
export default CreateEventModal;
{
  /* <form onSubmit={handleSubmit}>
         
        </form> */
}
