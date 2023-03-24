import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SignInFormFields from "./SignInFormFields";
import SubmitButton from "@/src/common/components/forms/SubmitButton";
import AccountsService from "../service/AccountsService";
import authService from "@/src/common/service/config/authService";
import { Blues } from "@/src/common/config/colors";
import { SignInFormValidationSchema } from "../utils/helper";
import { FRONTEND_HOME_PAGE_URL } from "@/src/common/utils/constants";

const accountsService = new AccountsService();
const SignInForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const initialState = {
    mail: "",
    password: "",
  };

  const handleSubmit = async (data, actions) => {
    const { mail, password } = data;
    const requestData = {
      email: mail,
      password,
    };
    accountsService
      .userLogin(requestData)
      .then((res) => {
        console.log(res);
        actions.setSubmitting(false);
        enqueueSnackbar("User successfully Logged In", {
          variant: "info",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        authService.setToken(res.data.token);
        router.push(FRONTEND_HOME_PAGE_URL);
      })
      .catch((error) => {
        actions.setSubmitting(false);
        console.log(error);
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        actions.resetForm();
      });
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={SignInFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <SignInFormFields />

            <Box
              display="flex"
              justifyContent="center"
              mt={8}
              flexDirection="column"
              rowGap={2}
            >
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                variant="contained"
              >
                Login
              </SubmitButton>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: 12, lg: 12 },
                  color: "#000000",
                  fontWeight: 400,
                }}
              >
                Don&apos;t have an account?{" "}
                <Link
                  href="/accounts/signup"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontSize: { xs: 12, lg: 12 },
                      color: Blues["A100"],
                      fontWeight: 700,
                    }}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
