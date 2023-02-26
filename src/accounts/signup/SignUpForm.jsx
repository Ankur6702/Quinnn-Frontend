import React from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import SignUpFormFields from "./SignUpFormFields";
import SubmitButton from "@/src/common/components/forms/SubmitButton";
import { Blues } from "@/src/common/config/colors";

const SignUpForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const initialState = {
    name: "",
    mail: "",
    password: "",
    gender: "",
    username: "",
  };

  return (
    <Formik
      initialValues={initialState}
      //   validationSchema={contactFormValidationSchema}
      //   onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <SignUpFormFields />

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
              Explore
            </SubmitButton>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 12, lg: 12 },
                color: "#000000",
                fontWeight: 400,
              }}
            >
              Already have an account?{" "}
              <Link href="/signin" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: 12, lg: 12 },
                    color: Blues["A100"],
                    fontWeight: 700,
                  }}
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
