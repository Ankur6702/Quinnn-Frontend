import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";

import Navbar from "../Navbar";
import useUserContext from "../../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";

const PublicProfileActivity = ({ profile }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = useMemo(() => {
    const tabsList = [
      {
        route: `/profile`,
        label: "Posts",
        onClick: () => setTabIndex(0),
      },
      // {
      //   route: `/profile`,
      //   label: "Blogs",
      //   onClick: () => setTabIndex(1),
      // },
    ];
    return tabsList;
  }, []);
  console.log(profile);

  return (
    <Box width="100%" boxSizing="border-box">
      <Navbar tabs={tabs} tabIndex={tabIndex} />
      <Box display="flex" flexDirection="column" rowGap={4} my={4}>
        {profile?.posts?.map((post, index) => {
          // console.log(post._id);
          return (
            <PostItem
              key={index}
              boxprops={{ sx: { maxWidth: "auto" } }}
              text={post?.text}
              imageUrl={post?.imageURL}
              time={post?.creationDate}
              name={profile?.name}
              avatar={profile?.profileImageURL}
              gender={profile?.gender}
              likes={post?.likes?.length}
              comments={post?.comments?.length}
              link={`${process.env.BASE_FRONTEND_URL}/${post?._id}`}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default PublicProfileActivity;
