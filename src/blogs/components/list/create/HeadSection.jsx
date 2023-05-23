import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useSnackbar } from "notistack";
import { Form, Formik } from "formik";
import { useFormikContext } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

import BlogFields from "./BlogFields";
import { firebaseConfig } from "@/src/common/config/firebaseConfig";
import useUserContext from "@/src/profile/context/useUserContext";
import { CreateBlogFormValidationSchema } from "@/src/common/components/modals/utils/helper";
import BlogService from "@/src/blogs/services/BlogService";
import InputWithoutLabel from "@/src/common/components/forms/InputWithoutLabel";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const blogService = new BlogService();
const HeadSection = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const { user, setUser } = useUserContext();
  const [uploading, setUploading] = useState(false);
  const storageRef = ref(storage, "images/");
  const formikRef = useRef();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const initialState = {
    title: "",
    coverImage: "",
  };

  const saveBlog = (content) => {
    setText(content);
  };
  const handleSubmit = async (data) => {
    try {
      const { title } = data;
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/blog/create`;
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
              title,
              content: text,
              imageURL: downloadURL,
            };
            const Response = await blogService.post(reqUrl, requestData);
            enqueueSnackbar("Published successfully", {
              variant: "info",
              autoHideDuration: 2000,
              anchorOrigin: { horizontal: "right", vertical: "top" },
            });
            setUploading(false);
            setImage(null);
            setImageUrl(null);
            router.push(`/blogs/${Response?.data?.blog?._id}`);
          }
        );
      } else {
        setUploading(true);
        const requestData = {
          title,
          content: text,
          imageURL: null,
        };
        const Response = await blogService.post(reqUrl, requestData);
        enqueueSnackbar("Published successfully", {
          variant: "info",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        setUploading(false);
        setImage(null);
        setImageUrl(null);
        router.push(`/blogs/${Response?.data?.blog?._id}`);
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
    }
  };

  // Handle uploaded image
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

  return (
    <Box display="flex" flexGrow={1} width="100%">
      <Formik
        initialValues={initialState}
        validationSchema={CreateBlogFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <BlogFields
              image={image}
              uploading={uploading}
              imageUrl={imageUrl}
              saveBlog={saveBlog}
              handleImageChange={handleImageChange}
              handleRemoveImage={handleRemoveImage}
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default HeadSection;
