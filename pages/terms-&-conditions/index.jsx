import React from "react";
import Head from "next/head";

import TermsConditions from "@/src/terms-&-conditions/components/TermsConditions";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";

const index = () => {
  return (
    <>
      <Head>
        <title>{`Terms & Conditions | ${SITE_NAME}`}</title>
        <meta
          name="description"
          content="Welcome to our LGBTQ social media platform! Our terms and conditions aim to create a safe and inclusive space for everyone, regardless of their sexual orientation, gender identity, or expression. By using our platform, you agree to abide by our community guidelines and respect the diversity of our users. We are committed to protecting your privacy and personal information, and providing a positive and supportive environment for all members. Thank you for being a part of our community!"
        />
        <meta property="og:url" content={`${SERVER}/terms-&-conditions`} />
        <meta
          property="og:title"
          content={`Terms & Conditions | ${SITE_NAME}`}
        />
        <meta
          property="og:description"
          content="Welcome to our LGBTQ social media platform! Our terms and conditions aim to create a safe and inclusive space for everyone, regardless of their sexual orientation, gender identity, or expression. By using our platform, you agree to abide by our community guidelines and respect the diversity of our users. We are committed to protecting your privacy and personal information, and providing a positive and supportive environment for all members. Thank you for being a part of our community!"
        />
        <meta property="og:image" content="/logo/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <TermsConditions />
    </>
  );
};

export default index;
