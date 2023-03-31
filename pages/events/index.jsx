import React from "react";
import Head from "next/head";

import CreateEvent from "@/src/events/components/CreateEvent";
import TopEvents from "@/src/events/components/topEvents";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";

const index = () => {
  return (
    <>
      <Head>
        <title>{`Events | ${SITE_NAME}`}</title>
        <meta
          name="description"
          content="Join our inclusive social media platform for the LGBTQ+ community. Connect with like-minded individuals, celebrate diversity, and express yourself freely in a safe and welcoming space. Join us today and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:url" content={`${SERVER}/about-us`} />
        <meta property="og:title" content={`Home | ${SITE_NAME}`} />
        <meta
          property="og:description"
          content="Join our inclusive social media platform for the LGBTQ+ community. Connect with like-minded individuals, celebrate diversity, and express yourself freely in a safe and welcoming space. Join us today and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:image" content="/logo/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <CreateEvent />
      <TopEvents />
    </>
  );
};

export default index;
