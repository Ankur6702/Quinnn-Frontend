import React from "react";

import VerifyYourEmail from "@/src/accounts/verify-email/VerifyYourEmail";
import AlreadyVerified from "@/src/accounts/verify-email/AlreadyVerified";
import authService from "@/src/common/service/config/AuthService";
import useAuth from "@/src/common/context/useAuth";

const VerifyEmail = () => {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? <AlreadyVerified /> : <VerifyYourEmail />}</>;
};

export default VerifyEmail;
