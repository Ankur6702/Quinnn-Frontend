import React from "react";

import Section from "@/src/common/components/Layout/utils/Section";
import { neutral } from "@/src/common/config/colors";

const TermsPage = ({ children }) => {
  return (
    <>
      <Section
        boxProps={{
          bgcolor: neutral["A700"],
          py: { xs: 6, md: 6 },
          minHeight: "100vh",
          width: "100%",
          display: "flex",
        }}
        containerProps={{
          px: { xs: 3, lg: 2 },
        }}
      >
        {children}
      </Section>
    </>
  );
};

export default TermsPage;
