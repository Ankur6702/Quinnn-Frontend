import React, { useRef, useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useSnackbar } from "notistack";
import { Form, Formik } from "formik";
import MarkdownIt from "markdown-it";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery, useTheme } from "@mui/material";

import useUserContext from "@/src/profile/context/useUserContext";
import PostsService from "@/src/home/service/PostsService";
import CreatePostFormFields from "./CreatePostFormFields";
import ToxicityWarningModal from "./ToxicityWarningModal";
import usePosts from "@/src/home/context/usePosts";
import { firebaseConfig } from "@/src/common/config/firebaseConfig";
import { CreatePostFormValidationSchema } from "../utils/helper";
import { Green, neutral } from "../../../config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const md = new MarkdownIt({
  breaks: true,
});

const postsService = new PostsService();
const CreatePostModal = ({ isOpen, handleClose }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Anyone");
  const { posts, setPosts } = usePosts();
  const { enqueueSnackbar } = useSnackbar();
  const { user, setUser } = useUserContext();
  const [uploading, setUploading] = useState(false);
  const storageRef = ref(storage, "images/");
  const formikRef = useRef();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };
  const handleToxicityModalClose = () => {
    setModalOpen(false);
  };

  const initialState = {
    postText: "",
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

  const checkToxicity = async (data, actions) => {
    try {
      const { postText } = data;
      setText(postText);
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/checkToxicity`;
      const requestData = {
        text: postText || " ",
      };
      setUploading(true);
      const Response = await postsService.post(reqUrl, requestData);
      const toxicScore =
        Response?.data?.data.attributeScores.TOXICITY.summaryScore.value;
      if (toxicScore > 0.7) {
        setUploading(false);
        handleClick();
      } else {
        handlePostSubmit(postText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostSubmit = async (postText) => {
    try {
      const markdownText = md.render(postText);
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/post/create`;
      if (image) {
        const timestamp = Date.now().toString(36);
        const randomString = Math.random().toString(36).substring(2, 8);
        const imageName = timestamp + randomString;
        setUploading(true);
        const uploadTask = uploadBytesResumable(
          ref(storage, `images/${imageName}`),
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
              text: markdownText,
              imageURL: downloadURL,
            };
            const Response = await postsService.post(reqUrl, requestData);
            setUser({
              ...user,
              posts: [...user.posts, Response?.data?.data],
            });
            setPosts((prev) =>
              prev ? [Response?.data?.data, ...prev] : Response?.data?.data
            );
            enqueueSnackbar("Post created successfully", {
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
        setUploading(true);
        const requestData = {
          text: markdownText,
          imageURL: null,
        };
        const Response = await postsService.post(reqUrl, requestData);
        setUser({
          ...user,
          posts: [...user.posts, Response?.data?.data],
        });
        setPosts((prev) =>
          prev ? [Response?.data?.data, ...prev] : Response?.data?.data
        );
        enqueueSnackbar("Post created successfully", {
          variant: "info",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        setUploading(false);
        setImage(null);
        setImageUrl(null);
        handleClose();
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
    setStatus("Anyone");
    setImageUrl(null);
    formikRef.current.resetForm();
    handleClose();
  };

  return (
    <>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
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
                width: 60,
                height: 60,
                fontSize: 15,
                cursor: "pointer",
                position: "relative",
              }}
              src={
                user?.profileImageURL === null || user?.profileImageURL === ""
                  ? user?.gender === "Female" || user?.gender === "Lesbian"
                    ? FEMALE_AVATAR
                    : MALE_AVATAR
                  : user?.profileImageURL
              }
            />

            <Box display="flex" flexDirection="column" rowGap={1}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 14, lg: 16 },
                  color: neutral["900"],
                  fontWeight: 500,
                  opacity: 0.6,
                }}
              >
                {user?.name}
              </Typography>
              <Tooltip
                placement={isDownMd ? "bottom" : "right"}
                disableInteractive
                title={
                  user?.isPrivate
                    ? "Your account is private so only your friends will be able to see this post"
                    : "Your account is Public so everyone will be able to see this post"
                }
              >
                <Box display="flex">
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: 12, lg: 14 },
                      color: user?.isPrivate ? "red" : Green["A100"],
                      fontWeight: 500,
                      opacity: 0.6,
                      px: 2,
                      py: 0.5,
                      borderRadius: 3,
                      border: 1,
                    }}
                  >
                    {user?.isPrivate ? "Private" : "Public"}
                  </Typography>
                </Box>
              </Tooltip>
            </Box>
          </Box>
          <Box height="80%">
            <Formik
              initialValues={initialState}
              validationSchema={CreatePostFormValidationSchema}
              onSubmit={checkToxicity}
              innerRef={formikRef}
            >
              {({ isSubmitting }) => (
                <Form style={{ height: "100%" }}>
                  <CreatePostFormFields
                    image={image}
                    uploading={uploading}
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
      <ToxicityWarningModal
        open={modalOpen}
        handleClose={handleToxicityModalClose}
        handlePostSubmit={handlePostSubmit}
        postText={text}
      />
    </>
  );
};
export default CreatePostModal;
