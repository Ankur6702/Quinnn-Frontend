import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { Blues, neutral } from "@/src/common/config/colors";
import CreatePost from "./CreatePost";

const Followers = () => {
  const friends = [
    {
      name: "Olivia Smith",
      folowers: "1.1k Followers",
      messages: 3,
    },
    {
      name: "Ethan Johnson",
      folowers: "3.4k Followers",
      messages: 5,
    },
    {
      name: "Sophia Miller",
      folowers: "2M Followers",
      messages: 12,
    },
    {
      name: "Liam Brown",
      folowers: "1.6k Followers",
      messages: 0,
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={6}
      boxSizing="content-box"
      p={4}
      sx={{
        bgcolor: neutral["A500"],
        borderRadius: 3,
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          component="span"
          sx={{
            color: neutral["800"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          My Friends
        </Typography>
        <Button
          component="span"
          sx={{
            color: Blues["A100"],
            textTransform: "none",
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          View All
        </Button>
      </Box>

      <Box display="flex" flexDirection="column" rowGap={3}>
        {friends.map((friend, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" columnGap={4} alignItems="center">
              <Avatar
                alt="profile-photo"
                sx={{
                  width: 30,
                  height: 30,
                  fontSize: 15,
                }}
              >
                <PersonRoundedIcon />
              </Avatar>
              <Box display="flex" flexDirection="column" rowGap={0.5}>
                <Typography
                  variant="h4"
                  sx={{
                    color: neutral["900"],
                    fontWeight: 500,
                    fontSize: { xs: 14, lg: 14 },
                  }}
                >
                  {friend?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: neutral["700"],
                    fontWeight: 400,
                    fontSize: { xs: 12, lg: 12 },
                  }}
                >
                  {friend?.folowers}
                </Typography>
              </Box>
            </Box>
            {friend?.messages != 0 && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor={neutral["A700"]}
                p={1}
                color={Blues["A100"]}
                borderRadius="50%"
                width={25}
                height={25}
              >
                {friend?.messages}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Followers;
