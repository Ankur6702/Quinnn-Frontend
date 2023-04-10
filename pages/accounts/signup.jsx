import React from "react";
import Head from "next/head";

import SignUp from "@/src/accounts/signup/SignUp";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";

export default function index() {
  return (
    <>
      <Head>
        <title>{`Join ${SITE_NAME} | Your Inclusive Social Media Platform for the LGBTQ+ Community`}</title>
        <meta
          name="description"
          content="Sign up for Quinn, the safe and welcoming space for the LGBTQ+ community. Connect with like-minded individuals, celebrate diversity, and express yourself freely. Join us today and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:url" content={`${SERVER}/accounts/signup`} />
        <meta
          property="og:title"
          content={`Join ${SITE_NAME} | Your Inclusive Social Media Platform for the LGBTQ+ Community`}
        />
        <meta
          property="og:description"
          content="Sign up for Quinn, the safe and welcoming space for the LGBTQ+ community. Connect with like-minded individuals, celebrate diversity, and express yourself freely. Join us today and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:image" content="/logo/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <SignUp />
    </>
  );
}
