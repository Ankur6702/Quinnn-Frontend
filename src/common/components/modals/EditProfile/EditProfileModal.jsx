import React, { useRef, useState } from "react";
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
import EditProfileFormFields from "./EditProfileFormFields";
import { getDayjsDate } from "@/src/common/utils/utils";
import { EditProfileValidationSchema } from "../utils/helper";
import { neutral } from "../../../config/colors";
import { SITE_NAME } from "@/src/common/config/seo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const profileService = new ProfileService();
const EditProfileModal = ({ isOpen, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { user, setUser } = useUserContext();

  const initialState = {
    name: user?.name || "",
    username: user?.username || "",
    country: user?.country || "",
    dob: user?.dob
      ? getDayjsDate({
          date: user?.dob,
          format: "YYYY-MM-DDTHH:mm:ss",
        })
      : "",
    bio: user?.bio
      ? user?.bio
      : `Hey there! I'm ${user?.name}. I'm excited to connect with new people on ${SITE_NAME} and share my experiences with you all. Do follow for more updates from me soon!`,
    isPrivate: user?.isPrivate ? "Private" : "Public" || "",
  };

  const handleSubmit = async (data, actions) => {
    try {
      const { name, country, username, dob, bio, isPrivate } = data;
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/user/profile/update`;
      const requestData = {
        name,
        username,
        country,
        dob,
        bio,
        isPrivate: isPrivate === "Private",
      };
      actions.setSubmitting(true);
      const Response = await profileService.put(reqUrl, requestData);
      setUser(Response?.data?.data);
      enqueueSnackbar("Profile updated successfully", {
        variant: "info",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
      actions.resetForm();
      handleClose();
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Something went wrong, Please try again", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
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
          maxHeight: { xs: 400, md: 520 },
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
            Edit Profile
          </Typography>
          <IconButton aria-label="close" size="medium" onClick={handleClose}>
            <CloseIcon
              fontSize="medium"
              sx={{ color: neutral["800"], opacity: 0.8 }}
            />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider sx={{ opacity: 0.75, mx: 2 }} />
      <DialogContent
        sx={{
          py: 3,
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, md: 6 },
        }}
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
            validationSchema={EditProfileValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ height: "100%" }}>
                <EditProfileFormFields isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
