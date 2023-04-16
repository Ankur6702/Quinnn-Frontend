import React from "react";
import Head from "next/head";

import HeadSection from "@/src/events/components/list/HeadSection";
import YourEvents from "@/src/events/components/list/YourEvents";
import UpcommingEvents from "@/src/events/components/list/UpcommingEvents";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";
import OngoingEvents from "@/src/events/components/list/OngoingEvents";

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
      <HeadSection />
      <YourEvents />
      <UpcommingEvents />
      <OngoingEvents />
      {/* <CreateEvent />
      <TopEvents /> */}
    </>
  );
};

export default index;
