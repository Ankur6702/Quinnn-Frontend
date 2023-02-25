import React from "react";
import { useRouter } from "next/router";

const Routes = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Routes;
