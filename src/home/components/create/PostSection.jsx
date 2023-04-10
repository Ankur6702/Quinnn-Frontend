import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import useUserContext from "@/src/profile/context/useUserContext";
import ProfileService from "@/src/profile/service/ProfileService";
import usePosts from "../../context/usePosts";
import CreatePost from "./CreatePost";
import ShowPosts from "../Posts/ShowPosts";
import Followers from "./Followers";
import PostFilter from "../Posts/PostFilter";
import { neutral } from "@/src/common/config/colors";

const profileService = new ProfileService();
const PostSection = () => {
  const theme = useTheme();
  const { page, setPage, setPosts, refresh, setRefresh } = usePosts();
  const [sort, setSort] = useState("popular");
  const isDownXl = useMediaQuery(theme.breakpoints.down("xl"));
  const { data: following, run, status, error, setData } = useAsync();
  const { user } = useUserContext();

  const sortPosts = (type) => {
    if (sort !== type) {
      setPosts([]);
      setPage(1);
      setSort(type);
    }
  };

  const refreshPosts = () => {
    setPosts([]);
    setPage(1);
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchUser = async () => {
      run(profileService.fetchUserFollowing(user?._id))
        .then((response) => {})
        .catch((error) => console.error(error));
    };
    fetchUser();
  }, [run, user?._id]);

  return (
    <>
      <Box
        sx={{
          maxWidth: 630,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <CreatePost />
        <Box display="flex" columnGap={3} width="100%">
          <Box width="90%">
            <Divider>
              <IconButton onClick={refreshPosts}>
                <RefreshIcon sx={{ fontSize: 24, color: neutral["A200"] }} />
              </IconButton>
            </Divider>
          </Box>
          <PostFilter sortPosts={sortPosts} sort={sort} />
        </Box>
        <ShowPosts sort={sort} />
      </Box>

      {!isDownXl && (
        <Box sx={{ maxWidth: 320, width: "100%", position: "relative" }}>
          <GenericResponseHandler
            status={status}
            error={error}
            skeleton={
              <GenericListSkeleton
                items={1}
                gridProps={{
                  sx: { maxWidth: 320, width: "100%", position: "fixed" },
                }}
                gridItemProps={{
                  rowGap: 1,
                  sx: {
                    borderRadius: 3,
                  },
                }}
                boxProps={{
                  height: 400,
                  p: 0,
                  sx: {
                    "& .MuiSkeleton-root": {
                      borderRadius: 1.5,
                    },
                  },
                }}
              />
            }
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                maxWidth: 320,
                width: "100%",
                bgcolor: neutral["A500"],
                position: "fixed",
              }}
            >
              <Followers following={following?.data} />
            </Box>
          </GenericResponseHandler>
        </Box>
      )}
    </>
  );
};

export default PostSection;
