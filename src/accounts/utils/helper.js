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
  {
    label: "Bisexual",
    value: "Bisexual",
  },
  {
    label: "Transgender",
    value: "Transgender",
  },
  {
    label: "Queer",
    value: "Queer",
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
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password must be less than 16 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
      "Password should contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(
      ["Male", "Female", "Gay", "Lesbian", "Bisexual", "Transgender", "Queer"],
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
    .max(15, "Password length should be 15 or less characters")
    .required("Password is required"),
};

export const SignInFormValidationSchema = Yup.object(SignInFormValidation);
