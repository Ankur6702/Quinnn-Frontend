import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { Blues, neutral } from "@/src/common/config/colors";

const AnswerCard = () => {
  const cards = [
    {
      question: "How can I setup my user profile?",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      Duo Reges: constructio interrete. Quod ea non occurrentia fingunt, vincunt Aristonem; Quis est tam dissimile homini. Age, inquies, ista parva sunt.
      `,
    },
    {
      question: "Can I have more than one subscription at a time?",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      Duo Reges: constructio interrete. Quod ea non occurrentia fingunt, vincunt Aristonem; Quis est tam dissimile homini. Age, inquies, ista parva sunt.
      `,
    },
    {
      question: "Can I cancel my subscription anytime?",
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Egone quaeris, inquit, quid sentiam? Sed haec omittamus; Prodest, inquit, mihi eo esse animo.
      Duo Reges: constructio interrete. Quod ea non occurrentia fingunt, vincunt Aristonem; Quis est tam dissimile homini. Age, inquies, ista parva sunt.
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
          padding= {10}
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

      <Box display="flex" flexDirection="column" rowGap={8} >
        {cards.map((cards, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding= {10}

            sx={{
                bgcolor: neutral["A500"],
                borderRadius: 3,
                boxShadow:
                  " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
          >
            <Box display="flex" columnGap={4} alignItems="center" >
              
              <Box display="flex" flexDirection="row" columnGap={4} alignItems="center" >
              
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
