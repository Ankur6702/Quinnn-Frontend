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
      link: "www.them.us"
    },
    {
      name: "Celebrity and Entertainment News",
      description: `
      Coverage of LGBTQ+ celebrities and entertainers, including interviews, reviews, and features about LGBTQ+ representation in media.
      `,
      link: "www.out.com"
    },
    {
      name: "Health and Wellness",
      description: `
      Articles and resources related to LGBTQ+ health and wellness, including information on physical and mental health, as well as advice on self-care and healthy living.
      `,
      link: "www.translifeline.org/"
    },
    {
      name: "LGBTQ+ History and Culture",
      description: `
        Explore the rich history and vibrant culture of the LGBTQ+ community through articles, documentaries, and resources that highlight significant events, figures, and movements.
      `,
      link: "www.lgbtqnation.com"
    },
    {
      name: "Youth Support",
      description: `
        Find support and resources specifically tailored to LGBTQ+ youth, including helplines, online communities, and organizations offering counseling, mentoring, and empowerment programs.
      `,
      link: "www.itgetsbetter.org"
    },
    {
      name: "Transgender Rights and Advocacy",
      description: `
        Learn about transgender rights, advocacy organizations, and resources for transgender individuals, including legal support, healthcare information, and community initiatives.
      `,
      link: "www.transequality.org"
    },
    {
      name: "Parenting and Family Support",
      description: `
        Find resources, articles, and support networks for LGBTQ+ individuals and couples who are parents or planning to start a family, including adoption information, parenting tips, and family-building resources.
      `,
      link: "www.familyequality.org"
    },
    {
      name: "Allyship and Education",
      description: `
        Discover educational resources and tools to become a better LGBTQ+ ally, including guides on inclusive language, allyship training programs, and resources for creating inclusive spaces.
      `,
      link: "www.glaad.org"
    },
    {
      name: "Travel and Destinations",
      description: `
        Discover LGBTQ+-friendly travel destinations, accommodations, events, and travel guides for LGBTQ+ travelers, ensuring safe and inclusive experiences while exploring the world.
      `,
      link: "www.iglta.org"
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
  
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        columnGap={5}
        width="100%"
        className="card-container"
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={10}
            width={{ xs: '100%', lg: '30%' }}
            sx={{
              bgcolor: neutral["A500"],
              borderRadius: 3,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              marginBottom: "20px",
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
                    onClick={() => window.open(`https://${card?.link}`, '_blank')}
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
