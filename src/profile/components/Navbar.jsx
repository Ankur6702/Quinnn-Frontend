import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import DetailNavbar from "@/src/common/components/Layout/components/DetailNavbar";

const Navbar = ({ tabs, tabIndex }) => {
  return (
    <Box display="flex">
      {tabs && (
        <DetailNavbar
          appBarProps={{
            position: "sticky",
            color: "transparent",
            sx: {
              boxShadow: "none",
              top: 20,
            },
          }}
          tabs={tabs}
          containerProps={{
            sx: {
              px: "0px !important",
              "&&& .MuiTabs-flexContainer": { display: "block" },
              "&&&& .MuiTab-root": { fontSize: { xs: 16, md: 20 } },
            },
          }}
          tabIdx={tabIndex}
          onTabChange={() => {}}
          useCustomTab={tabs.map((tab) => (
            <Tab
              key={tab.label}
              label={tab.label}
              sx={{ textTransform: "initial" }}
              onClick={tab.onClick}
            />
          ))}
        />
      )}
    </Box>
  );
};

export default Navbar;
