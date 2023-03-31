import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";

import CategoryCards from "@/src/resources/components/CategoryCards";
import AnswerCard from "@/src/resources/components/AnswerCard";
import TopicsCard from "@/src/resources/components/TopicsCard";
import QuestionCards from "@/src/resources/components/QuestionCards";

const index = () => {
  return (
    <>
      <CategoryCards />
      <AnswerCard />
      <TopicsCard />
      {/* <QuestionCards /> */}
    </>
  );
};

export default index;
