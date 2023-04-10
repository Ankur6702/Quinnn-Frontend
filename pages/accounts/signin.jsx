import React from "react";
import Head from "next/head";

import SignIn from "../../src/accounts/login/SignIn";
import { SITE_NAME, SERVER } from "@/src/common/config/seo";

const Login = () => {
  return (
    <>
      <Head>
        <title>{`Sign in to ${SITE_NAME} | Your Inclusive Social Media Platform for the LGBTQ+ Community`}</title>
        <meta
          name="description"
          content="Log in to Quinn, the safe and welcoming space for the LGBTQ+ community. Connect with like-minded individuals, share your experiences and perspectives, and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:url" content={`${SERVER}/accounts/signin`} />
        <meta
          property="og:title"
          content={`Sign in to ${SITE_NAME} | Your Inclusive Social Media Platform for the LGBTQ+ Community`}
        />
        <meta
          property="og:description"
          content="Log in to Quinn, the safe and welcoming space for the LGBTQ+ community. Connect with like-minded individuals, share your experiences and perspectives, and be part of a vibrant community that supports and uplifts each other."
        />
        <meta property="og:image" content="/logo/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>{" "}
      <SignIn />
    </>
  );
};

export default Login;
