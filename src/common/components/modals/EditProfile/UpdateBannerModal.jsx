import React, { useRef, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useSnackbar } from "notistack";
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

import ProfileService from "@/src/profile/service/ProfileService";
import useUserContext from "@/src/profile/context/useUserContext";
import UpdateBannerFormFields from "./UpdateBannerFormFields";
import { firebaseConfig } from "@/src/common/config/firebaseConfig";
import { BannerValidationSchema } from "../utils/helper";
import { neutral } from "../../../config/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const profileService = new ProfileService();
const UpdateBannerModal = ({ isOpen, handleClose, url, handleUpdateImage }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { user, setUser } = useUserContext();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const storageRef = ref(storage, "images/");
  const formikRef = useRef();

  const initialState = { image: "" };

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
    const requestData = {
      coverImageURL: "",
    };
    profileService
      .updateProfile(requestData)
      .then((response) => {
        handleUpdateImage(null);
        setUser(response?.data?.data);
        enqueueSnackbar("Profile updated successfully", {
          variant: "info",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Something went wrong,Please try again", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      });

    handleClose();
  };
  const handleSubmit = async () => {
    try {
      if (image) {
        const reqUrl = `${process.env.API_BASE_SERVICE}/api/user/profile/update`;
        setUploading(true);
        const uploadTask = uploadBytesResumable(
          ref(storage, `images/${user?._id}-avatar`),
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
            handleUpdateImage(imageUrl);
            const requestData = {
              coverImageURL: downloadURL,
            };
            const Response = await profileService.put(reqUrl, requestData);
            setUser(Response?.data?.data);
            enqueueSnackbar("Profile update successfully", {
              variant: "info",
              autoHideDuration: 2000,
              anchorOrigin: { horizontal: "right", vertical: "top" },
            });
            setUploading(false);
            setImage(null);
            setImageUrl(null);
            handleClose();
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
            validationSchema={BannerValidationSchema}
            onSubmit={handleSubmit}
            innerRef={formikRef}
          >
            {({ isSubmitting }) => (
              <Form style={{ height: "100%" }}>
                <UpdateBannerFormFields
                  uploading={uploading}
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
export default UpdateBannerModal;
