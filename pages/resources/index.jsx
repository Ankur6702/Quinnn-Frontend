import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";

import CategoryCards from "@/src/home/components/resource/CategoryCards";
import AnswerCard from "@/src/home/components/resource/AnswerCard";
import TopicsCard from "@/src/home/components/resource/TopicsCard";
import QuestionCards from "@/src/home/components/resource/QuestionCards";

const index = () => {
  return(
    <>
      <CategoryCards />
      <AnswerCard />
      <TopicsCard />
      <QuestionCards />
    </>
  );
};

export default index;
