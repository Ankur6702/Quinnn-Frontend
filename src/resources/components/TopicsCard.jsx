import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import { Blues, neutral } from "@/src/common/config/colors";

const TopicsCard = () => {
  const cards = [
    {
      name: "LGBTQ+ News and Current Events",
      description: `
      Coverage of news and current events related to the LGBTQ+ community, including stories about politics, activism, and social issues affecting LGBTQ+ individuals.
      `,
    },
    {
      name: "Celebrity and Entertainment News",
      description: `
      Coverage of LGBTQ+ celebrities and entertainers, including interviews, reviews, and features about LGBTQ+ representation in media.
      `,
    },
    {
      name: "Health and Wellness",
      description: `
      Articles and resources related to LGBTQ+ health and wellness, including information on physical and mental health, as well as advice on self-care and healthy living.
      `,
    },
  ];
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      rowGap={5}
      p={4}
      padding={10}
      alignItems="left"
    >
      <Box display="flex" alignItems="left" flexDirection="column" width="100%">
        <Typography
          variant="h1"
          component="span"
          padding={5}
          alignItems="left"
          sx={{
            color: neutral["800"],
            fontWeight: 500,
            fontSize: { xs: 20, lg: 22 },
          }}
        >
          Popular Topics
          <br></br>
          <Typography
            variant="h4"
            component="span"
            alignItems="left"
            sx={{
              color: neutral["800"],
              fontWeight: 200,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Explore some of the most popular topics
          </Typography>
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" columnGap={5} width="100%">
        {cards.map((cards, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={10}
            width="30%"
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
                <Typography>
                  <Button
                    component="span"
                    sx={{
                      color: Blues["A100"],
                      textTransform: "none",
                      fontSize: 12,
                      fontWeight: 400,
                      padding: 2,
                    }}
                  >
                    Read More
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="row" columnGap={5} width="100%">
        {cards.map((cards, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={10}
            width="30%"
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
                <Typography>
                  <Button
                    component="span"
                    sx={{
                      color: Blues["A100"],
                      textTransform: "none",
                      fontSize: 12,
                      fontWeight: 400,
                      padding: 2,
                    }}
                  >
                    Read More
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopicsCard;
