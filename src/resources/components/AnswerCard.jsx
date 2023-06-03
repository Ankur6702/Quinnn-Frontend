import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NetflixLogo from "./netflix-logo.png";
import RedditLogo from "./Reddit-logo.jpg";
import GoodreadsLogo from "./goodreads.jpg";

import { neutral } from "@/src/common/config/colors";

const AnswerCard = () => {
  const cards = [
    {
      question: "Netflix Series: 'Queer Eye'",
      description: "Discover the heartwarming reality show where a group of experts helps individuals transform their lives and boost their confidence.",
      link: "https://www.netflix.com/title/80160037",
      logo: NetflixLogo,
    },
    {
      question: "Reddit Discussion: LGBTQ+ Mental Health Support",
      description: "Join the active Reddit community discussing mental health support and sharing experiences within the LGBTQ+ community.",
      link: "https://www.reddit.com/r/lgbt/comments/13wz76o/happy_pride_month_leave_a_message_in_the_rlgbt/",
      logo: RedditLogo,
    },
    {
      question: "Book Recommendation: 'Red, White & Royal Blue' by Casey McQuiston",
      description: "Explore this popular LGBTQ+ romance novel about a fictional romance between the First Son of the United States and a British prince.",
      link: "https://www.goodreads.com/book/show/41150487-red-white-royal-blue",
      logo: GoodreadsLogo,
    }
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
        Trending over the past week<TrendingUpIcon />
      </Typography>
    </Box>

    <Box display="flex" flexDirection="column" rowGap={8} width="100%">
      {cards.map((card, index) => (
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
            transition: "box-shadow .3s ease",
            "&:hover": {
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Box
            display="flex"
            columnGap={4}
            alignItems="center"
            onClick={() => window.open(card.link, "_blank")}
            sx={{ cursor: "pointer" }}
          >
            <Box display="flex" flexDirection="row" columnGap={4} alignItems="center">
            <Image src={card.logo} alt="logo" height={'25'} /> 
              <Typography
                variant="h4"
                sx={{
                  color: neutral["900"],
                  fontWeight: 500,
                  fontSize: { xs: 14, lg: 14 },
                  padding: 2,
                }}
              >
                {card.name}
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
                {card.description}
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
