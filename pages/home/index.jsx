import React from "react";
import Head from "next/head";

import PostSection from "@/src/home/components/create/PostSection";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";

const index = () => {
  return (
    <>
      <Head>
        <title>{`Welcome to ${SITE_NAME} | Home`}</title>
        <meta
          name="description"
          content="Join Quinn, the safe and welcoming space for the LGBTQ+ community. Connect with like-minded individuals, celebrate diversity, and express yourself freely. Sign up today and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:url" content={`${SERVER}/home`} />
        <meta property="og:title" content={`Welcome to ${SITE_NAME} | Home`} />
        <meta
          property="og:description"
          content="Join Quinn, the safe and welcoming space for the LGBTQ+ community. Connect with like-minded individuals, celebrate diversity, and express yourself freely. Sign up today and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:image" content="/logo/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <PostSection />
    </>
  );
};

export default index;
