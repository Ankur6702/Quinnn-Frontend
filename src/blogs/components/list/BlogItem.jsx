/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Link from "next/link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import { formatBlogDate } from "@/src/common/utils/utils";
import ShareModal from "@/src/common/components/share/ShareModal";
import ProfileService from "@/src/profile/service/ProfileService";
import BlogService from "../../services/BlogService";
import { neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";
import { calculateReadTime, removeHTMLTags } from "../../utils/helper";
import { sliceString } from "@/src/common/utils/utils";
import BlogsItemsSkeleton from "@/src/common/components/skeletons/BlogsItemsSkeleton";
import BlogOptions from "./BlogOptions";

const profileService = new ProfileService();
const blogService = new BlogService();
const BlogItem = ({
  userId,
  blogId,
  text,
  title,
  removeBlog,
  imageUrl,
  time,
  upvotes,
  downvotes,
  boxProps,
  link,
}) => {
  const { data: userData, run, status, error, setData } = useAsync();
  const theme = useTheme();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [share, setShare] = useState(false);
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchUser = async () => {
      run(profileService.fetchUserData(userId)).catch((error) =>
        console.error(error)
      );
    };
    fetchUser();
  }, [run, userId]);

  const handleDeleteBlog = () => {
    blogService
      .deleteBlog(blogId)
      .then((response) => {
        removeBlog(blogId);
        enqueueSnackbar("Blog deleted successfully", {
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
  };

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <BlogsItemsSkeleton
          items={2}
          gridProps={{ sx: { my: 6, rowGap: { xs: 8, md: 12 } } }}
          gridItemProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
      }
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={isDownMd ? "100%" : "90%"}
        sx={{
          ...(boxProps?.sx || {}),
        }}
      >
        <Box display="flex" flexDirection="column" rowGap={3} width="70%">
          <Box display="flex" alignItems="center" columnGap={2}>
            <Link href={`/profile/${userData?.data?.username}`}>
              <Avatar
                alt="profile-photo"
                sx={{
                  width: 25,
                  height: 25,
                  fontSize: 15,
                  cursor: "pointer",
                  position: "relative",
                }}
                src={
                  userData?.data?.profileImageURL === null ||
                  userData?.data?.profileImageURL === ""
                    ? userData?.data?.gender === "Female" ||
                      userData?.data?.gender === "Lesbian"
                      ? FEMALE_AVATAR
                      : MALE_AVATAR
                    : userData?.data?.profileImageURL
                }
              />
            </Link>
            <Link href={`/profile/${userData?.data?.username}`}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 12, lg: 14 },
                  color: neutral["900"],
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {userData?.data?.name}
              </Typography>
            </Link>
            .
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 12, lg: 14 },
                color: neutral["700"],
                fontWeight: 500,
                opacity: 0.9,
              }}
            >
              {formatBlogDate(time)}
            </Typography>
          </Box>
          <Link href={link}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: neutral["800"],
                  opacity: 0.9,
                  fontSize: { xs: 16, md: 20 },
                  fontWeight: 600,
                }}
              >
                {sliceString(title, isDownMd ? 30 : 50)}
              </Typography>
            </Box>
          </Link>

          {!isDownMd && (
            <Box display="flex" width="100%" sx={{ textAlign: "inherit" }}>
              <Typography variant="body1" sx={{ fontSize: 16 }}>
                {sliceString(removeHTMLTags(text), 250)}
              </Typography>
            </Box>
          )}
          <Box display="flex" columnGap={3} alignItems="center">
            <Box
              sx={{
                bgcolor: neutral["A400"],
                px: { xs: 1, md: 2 },
                py: { xs: 0.5, md: 1 },
                borderRadius: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: 12, lg: 14 },
                  color: neutral["700"],
                  fontWeight: 400,
                  opacity: 0.8,
                  display: "flex",
                  alignItems: "center",
                  columnGap: 1,
                  pt: 0.25,
                }}
              >
                {calculateReadTime(text)}
              </Typography>
            </Box>
            <Box height="100%">
              <Button
                variant="text"
                onClick={() => setShare(true)}
                startIcon={<ShareIcon />}
                sx={{
                  textTransform: "none",
                  fontSize: { xs: 12, lg: 14 },
                  fontWeight: 500,
                  height: "100%",
                  py: 0.95,
                  borderRadius: 1,
                }}
              >
                Share
              </Button>
              {share && (
                <ShareModal
                  copyLink={link}
                  closeModal={() => setShare(false)}
                  facebook={link}
                  linkedin={link}
                  twitter={link}
                  title="Share this Blog"
                  instagram={link}
                />
              )}
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ position: "relative" }}
        >
          <Link href={link}>
            <img
              src={imageUrl}
              alt="cover image"
              width={isDownMd ? 100 : 230}
              height={isDownMd ? 70 : 150}
            />
          </Link>
          <Box sx={{ position: "absolute", bottom: -40, right: 0 }}>
            <BlogOptions userId={userId} handleDeleteBlog={handleDeleteBlog} />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ width: { xs: "100%", md: "90%" }, opacity: 0.9, my: 2 }} />
    </GenericResponseHandler>
  );
};

export default BlogItem;
