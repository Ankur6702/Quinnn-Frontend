import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AssistantIcon from "@mui/icons-material/Assistant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/material/Typography";

import { Blues, neutral } from "@/src/common/config/colors";

const CategoryCards = () => {
  const cards = [
    {
      name: "Mental Health",
      description: "Resources for mental health support and counseling for LGBTQ+ individuals",
      link: "https://www.thetrevorproject.org/"
    },
    {
      name: "Education and Awareness",
      description: "Educational resources and information to promote LGBTQ+ awareness and acceptance.",
      link: "https://www.glsen.org/"
    },
    {
      name: "Legal Rights",
      description: "Information and resources for LGBTQ+ individuals related to legal rights and protections.",
      link: "https://lambdalegal.org/"
    },
  ];
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="auto"
    >
      <Box display="flex" alignItems="center" mb={4}>
        <Typography
          variant="h4"
          component="span"
          padding={5}
          alignItems="center"
          sx={{
            color: neutral["800"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          Browse categories
        </Typography>
      </Box>
  
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        gap={4}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            flex="1 1 300px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={3}
            sx={{
              bgcolor: neutral["A500"],
              borderRadius: 3,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              transition: "box-shadow .3s ease",
              "&:hover": {
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              onClick={() => window.open(card?.link, '_blank')}
              sx={{ cursor: 'pointer' }}
            >
              {card?.name === "Assistance" && (
                <IconButton>
                  <AssistantIcon sx={{ fontSize: 35, color: Blues["A100"] }} />
                </IconButton>
              )}
              {card?.name === "User Guide" && (
                <IconButton>
                  <MenuBookIcon sx={{ fontSize: 35, color: Blues["A100"] }} />
                </IconButton>
              )}
              {card?.name === "Developers" && (
                <IconButton>
                  <CodeIcon sx={{ fontSize: 35, color: Blues["A100"] }} />
                </IconButton>
              )}
              <Typography
                variant="h4"
                sx={{
                  color: neutral["900"],
                  fontWeight: 500,
                  fontSize: { xs: 14, lg: 14 },
                  padding: 2,
                }}
              >
                {card?.name}
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
                {card?.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};  

export default CategoryCards;
