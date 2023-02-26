import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { neutral } from "@/src/common/config/colors";
import SignUp from "@/src/accounts/signup/SignUp";

export default function index() {
  return <SignUp />;
}
