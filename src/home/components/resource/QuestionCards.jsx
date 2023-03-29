import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import PostItem from "../Posts/PostItem";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { Blues, neutral } from "@/src/common/config/colors";

const QuestionCards = () => {
  const numbers = [1,2,3,4,5];
  return (
    <Box
      display="flex"
      flexDirection="column"
      columnGap={6}
      boxSizing="content-box"
      p={4}
      padding={10}
      alignItems="center"
      margin="auto"
      maxWidth={"95%"}
      overflow="scroll"
    >
      <Box display="flex" alignItems="center" flexDirection="column" >
      <Typography
          variant="h1"
          component="span"
          padding= {5}
          alignItems="left"
          sx={{
            color: neutral["800"],
            fontWeight: 500,
            fontSize: { xs: 20, lg: 22 },
          }}
        >
        Popular Questions
        </Typography>
        
        
      </Box>
      <br></br>
      <Box display="flex" flexDirection="row" columnGap={5} padding={5} >
        {numbers.map(() => (
            <>user posts here </>
        //   <PostItem />
        ))}
      </Box>
    </Box>
  );
};

export default QuestionCards;
