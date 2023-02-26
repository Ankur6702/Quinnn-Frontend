import React from "react";
import { useRouter } from "next/router";

import Route from "./Route";
import AccountsLayout from "@/src/accounts/AccountsLayout";

const Routes = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Route path="/accounts">
        <AccountsLayout>
          <Component {...pageProps} />
        </AccountsLayout>
      </Route>
      {!["accounts"].includes(router.asPath.split("/")[1]) && (
        <Route path="/" isBaseRoute>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </Route>
      )}
    </>
  );
};

export default Routes;
