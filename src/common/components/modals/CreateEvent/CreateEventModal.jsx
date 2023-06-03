import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useSnackbar } from "notistack";
import MarkdownIt from "markdown-it";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

import EventsService from "@/src/events/services/EventsService";
import { firebaseConfig } from "@/src/common/config/firebaseConfig";
import CreateEventFormFields from "./CreateEventFormFields";
import { CreateEventValidationSchema } from "../utils/helper";
import { neutral } from "../../../config/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const md = new MarkdownIt({
  breaks: true,
});

const eventsService = new EventsService();
const CreateEventModal = ({ isOpen, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const storageRef = ref(storage, "images/");
  const formikRef = useRef();

  const initialState = {
    title: "",
    description: "",
    isOnline: "Online",
    link: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    eventImage: "",
  };

  // Handle event's banner image
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  // Handle form submit
  const handleEventSubmit = async (data, actions) => {
    const {
      title,
      description,
      isOnline,
      link,
      startDate,
      startTime,
      endDate,
      endTime,
    } = data;
    try {
      const markdownText = md.render(description);
      if (image) {
        const reqUrl = `${process.env.API_BASE_SERVICE}/api/event/create`;
        const timestamp = Date.now().toString(36);
        const randomString = Math.random().toString(36).substring(2, 8);
        const imageName = timestamp + randomString;
        setUploading(true);
        const uploadTask = uploadBytesResumable(
          ref(storage, `images/event_${imageName}`),
          image
        );
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle progress
          },
          (error) => {
            console.log(error);
          },
          async () => {
            // Get the download URL of the uploaded image
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageUrl(downloadURL);
            const requestData = {
              title,
              description: markdownText,
              isOnline: isOnline == "Online" ? true : false,
              startDate,
              startTime,
              endDate,
              endTime,
              imageURL: downloadURL,
              ...(isOnline == "Online"
                ? { meetingLink: link }
                : {
                    location: link,
                  }),
            };

            const Response = await eventsService.post(reqUrl, requestData);
            enqueueSnackbar("Event Created successfully", {
              variant: "info",
              autoHideDuration: 2000,
              anchorOrigin: { horizontal: "right", vertical: "top" },
            });
            setUploading(false);
            setImage(null);
            setImageUrl(null);
            handleClose();
            router.push(`/events/${Response?.data?.event?._id}`);
          }
        );
      } else {
        setImage(null);
        setImageUrl(null);
        handleClose();
        setUploading(false);
      }
    } catch (error) {
      console.log(error);
      setUploading(false);
      enqueueSnackbar("Something went wrong, Please try again", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
      setImage(null);
      setImageUrl(null);
      handleClose();
    }
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
          maxHeight: { xs: "80%", md: 450 },
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
            validationSchema={CreateEventValidationSchema}
            onSubmit={handleEventSubmit}
            innerRef={formikRef}
          >
            {({ isSubmitting, errors }) => {
              return (
                <Form>
                  <CreateEventFormFields
                    isSubmitting={uploading}
                    imageUrl={imageUrl}
                    handleImageChange={handleImageChange}
                  />
                </Form>
              );
            }}
          </Formik>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default CreateEventModal;
