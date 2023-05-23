import React from "react";
import Head from "next/head";

import HeadSection from "@/src/blogs/components/list/HeadSection";
import BlogList from "@/src/blogs/components/list/BlogList";

const index = () => {
  return (
    <>
      <HeadSection />
      <BlogList />
    </>
  );
};

export default index;
