import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { neutral } from "@/src/common/config/colors";

const AnswerCard = () => {
  const cards = [
    {
      question: "How can I setup my user profile?",
      description: `
      You can set it up by signing up for quinn. Once you're done with verifying your email, you can start setting up your profile. You can edit your profile anytime by clicking on the profile icon on the top right corner of the page. You can also change your password by clicking on the "Change Password" button on the profile page.
      `,
    },
    {
      question: "Can I have only selected people see my posts?",
      description: `
      Yes you can. You can set your privacy settings by clicking on the "Privacy Settings" button on the profile page. Once made private, only your followers will be able to see your posts. You can also make your posts visible to only your followers by clicking on the "Make Private" button on the post.
      `,
    },
    {
      question: "Can I create events?",
      description: `
      Absolutely! You can create events by clicking on the "Create Event" button on the home page. You can also edit your events by clicking on the "Edit Event" button on the event page. You can also delete your events by clicking on the "Delete Event" button on the event page. You can also delete your events by clicking on the "Delete Event" button on the event page.
      `,
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      columnGap={6}
      boxSizing="content-box"
      p={4}
      padding={15}
      alignItems="center"
      margin="auto"
    >
      <Box display="flex" alignItems="center" flexDirection="row" rowGap={6}>
        <Typography
          variant="h4"
          component="span"
          padding={10}
          alignItems="center"
          sx={{
            color: neutral["800"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          Quick Answers
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" rowGap={8}>
        {cards.map((cards, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={10}
            sx={{
              bgcolor: neutral["A500"],
              borderRadius: 3,
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
            }}
          >
            <Box display="flex" columnGap={4} alignItems="center">
              <Box
                display="flex"
                flexDirection="row"
                columnGap={4}
                alignItems="center"
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: neutral["900"],
                    fontWeight: 500,
                    fontSize: { xs: 14, lg: 14 },
                    padding: 2,
                  }}
                >
                  {cards?.question}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: neutral["700"],
                    fontWeight: 400,
                    fontSize: { xs: 12, lg: 12 },
                    padding: 2,
                  }}
                >
                  {cards?.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AnswerCard;
