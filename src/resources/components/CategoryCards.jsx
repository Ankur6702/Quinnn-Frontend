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
    },
    {
      name: "Education and Awareness",
      description: "Educational resources and information to promote LGBTQ+ awareness and acceptance.",
    },
    {
      name: "Legal Rights",
      description: "Information and resources for LGBTQ+ individuals related to legal rights and protections.",
    },
  ];
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      columnGap={6}
      p={4}
      padding={10}
      alignItems="center"
      margin="auto"
    >
      <Box display="flex" alignItems="center">
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

      <Box display="flex" flexDirection="row" columnGap={5}>
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
                flexDirection="column"
                columnGap={4}
                alignItems="center"
              >
                <IconButton>
                  {cards?.name == "Assistance" ? (
                    <AssistantIcon
                      sx={{ fontSize: 35, color: Blues["A100"] }}
                    />
                  ) : (
                    <></>
                  )}
                  {cards?.name == "User Guide" ? (
                    <MenuBookIcon sx={{ fontSize: 35, color: Blues["A100"] }} />
                  ) : (
                    <></>
                  )}
                  {cards?.name == "Developers" ? (
                    <CodeIcon sx={{ fontSize: 35, color: Blues["A100"] }} />
                  ) : (
                    <></>
                  )}
                </IconButton>
                <Typography
                  variant="h4"
                  sx={{
                    color: neutral["900"],
                    fontWeight: 500,
                    fontSize: { xs: 14, lg: 14 },
                    padding: 2,
                  }}
                >
                  {cards?.name}
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

export default CategoryCards;
