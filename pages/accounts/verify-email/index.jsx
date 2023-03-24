import React from "react";

import VerifyYourEmail from "@/src/accounts/verify-email/VerifyYourEmail";
import AlreadyVerified from "@/src/accounts/verify-email/AlreadyVerified";
import authService from "@/src/common/service/config/authService";

const VerifyEmail = () => {
  console.log(authService.isAuthenticated);
  return (
    <>
      {authService.isAuthenticated ? <AlreadyVerified /> : <VerifyYourEmail />}
    </>
  );
};

export default VerifyEmail;
