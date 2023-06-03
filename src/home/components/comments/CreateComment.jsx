import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import useUserContext from "@/src/profile/context/useUserContext";
import usePosts from "../../context/usePosts";
import PostsService from "../../service/PostsService";
import CreateCommentFields from "./CreateCommentFields";
import { CreateCommentsFormValidationSchema } from "@/src/common/components/modals/utils/helper";
import { MALE_AVATAR, FEMALE_AVATAR } from "@/src/profile/utils/constants";
import { neutral } from "@/src/common/config/colors";

const postsService = new PostsService();
const CreateComment = ({ handleCreateComment, postId, updateComments }) => {
  const { user } = useUserContext();
  const router = useRouter();
  const { posts, setPosts } = usePosts();
  const { enqueueSnackbar } = useSnackbar();
  const [uploading, setUploading] = useState(false);

  const initialState = {
    text: "",
  };

  const handleSubmit = async (data, actions) => {
    try {
      const { text } = data;
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/comment/create/${postId}`;
      setUploading(true);
      const requestData = {
        text,
      };
      const Response = await postsService.post(reqUrl, requestData);
      {
        router.asPath === "/home"
          ? setPosts((prevState) => {
              const updatedPosts = posts.map((post) => {
                if (post?._id === postId) {
                  return {
                    ...post,
                    comments: [...post.comments, user?._id],
                  };
                }
                return post;
              });
              return updatedPosts;
            })
          : updateComments();
      }
      const newComment = {
        _id: Response?.data?.commentId,
        text: text,
        userID: user?._id,
        postID: postId,
        likes: [],
        dislikes: [],
        creationDate: new Date().toISOString(),
      };

      handleCreateComment(newComment);
      actions.resetForm();
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
      actions.resetForm();
      enqueueSnackbar("Something went wrong, Please try again", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
    }
  };

  return (
    <Box display="flex" columnGap={4} px={4} py={1} width="100%">
      <Avatar
        alt="profile-photo"
        src={
          user?.profileImageURL === null || user?.profileImageURL === ""
            ? user?.gender === "Female" || user?.gender === "Lesbian"
              ? FEMALE_AVATAR
              : MALE_AVATAR
            : user?.profileImageURL
        }
        sx={{
          width: 30,
          height: 30,
          fontSize: 15,
          mt: 2,
          cursor: "pointer",
          position: "relative",
        }}
      />
      <Formik
        initialValues={initialState}
        validationSchema={CreateCommentsFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{ width: "100%" }}>
            <CreateCommentFields uploading={uploading} />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateComment;
