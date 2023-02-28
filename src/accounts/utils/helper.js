import * as Yup from "yup";
export const gender = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Gay",
    value: "Gay",
  },
  {
    label: "Lesbian",
    value: "Lesbian",
  },
];

const SignUpFormValidation = {
  name: Yup.string()
    .required("Name is required")
    .typeError("Please add valid name"),
  username: Yup.string()
    .required("Username is required")
    .typeError("Please add valid Username"),
  mail: Yup.string()
    .email()
    .required("Email is required")
    .typeError("Please add valid Email"),
  password: Yup.string()
    .min(8, "Password length should be 8 or more characters")
    .required("Password is required"),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(
      ["Male", "Female", "Gay", "Lesbian"],
      "This is not the valid choice."
    ),
};

export const SignUpFormValidationSchema = Yup.object(SignUpFormValidation);

const SignInFormValidation = {
  mail: Yup.string()
    .email()
    .required("Email is required")
    .typeError("Please add valid Email"),
  password: Yup.string()
    .min(8, "Password length should be 8 or more characters")
    .required("Password is required"),
};

export const SignInFormValidationSchema = Yup.object(SignInFormValidation);
