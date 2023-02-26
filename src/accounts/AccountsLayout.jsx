import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Section from "../common/components/Layout/utils/Section";
import { neutral } from "../common/config/colors";

const AccountsLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Section
      boxProps={{
        bgcolor: neutral["A700"],
        py: { xs: 6, md: 12 },
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
      }}
      containerProps={{
        px: { xs: 3, lg: 6 },
      }}
    >
      {children}
    </Section>
  );
};

export default AccountsLayout;
