import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { neutral, Blues } from "@/src/common/config/colors";

const TopEvents = () => {
  const cards = [
    {
      name: "Assistance",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      `,
    },
    {
      name: "User Guide",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      `,
    },
    {
      name: "Developers",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      `,
    },
    {
      name: "Assistance",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      `,
    },
    {
      name: "User Guide",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      `,
    },
    {
      name: "Developers",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      `,
    },
  ];

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      width="100%"
      display="flex"
      rowGap={2}
      my={6}
      flexDirection="column"
      alignItems="left"
    >
      <Box display="flex" flexDirection="column" width="100%">
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
          Popular Events
          <br />
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
            See the events that may interest you!
          </Typography>
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={{ xs: "center", sm: "space-between" }}
        rowGap={2}
      >
        {cards.map((card) => (
          <Box key={card.id} width={{ xs: "100%", sm: 300 }} px={2} pb={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding={10}
              maxWidth="100%"
              sx={{
                bgcolor: neutral["A500"],
                borderRadius: 3,
                boxShadow:
                  " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                "&:last-of-type": {
                  marginRight: 0,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  fontSize: { xs: 14, lg: 14 },
                  mb: 2,
                }}
              >
                {card.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  fontWeight: 400,
                  fontSize: { xs: 12, lg: 12 },
                  mb: 2,
                }}
              >
                {card.description}
              </Typography>
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
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopEvents;
