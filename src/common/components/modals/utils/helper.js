import * as Yup from "yup";
import { countries } from "./countries";
import {timesOfDay} from "./timesOfDay";

export const status = [
  {
    label: "Public",
    value: "Public",
  },
  {
    label: "Private",
    value: "Private",
  },
];

export const countryList = countries.map((country) => ({
  label: country,
  value: country,
}));

export const timesList = timesOfDay.map((times) => ({
  label: times,
  value: times,
}));

const CreatePostFormValidation = {
  postImage: Yup.mixed().test(
    "fileSize",
    "File size too large. Maximum size is 5MB",
    (value) => {
      if (!value) return true;
      return value.size <= MAX_FILE_SIZE;
    }
  ),
};

export const CreatePostFormValidationSchema = Yup.object(
  CreatePostFormValidation
);

const MAX_FILE_SIZE = 5000000; // 5MB in bytes

const BannerValidation = {
  image: Yup.mixed().test(
    "fileSize",
    "File size too large. Maximum size is 5MB",
    (value) => {
      if (!value) return true;
      return value.size <= MAX_FILE_SIZE;
    }
  ),
};
export const BannerValidationSchema = Yup.object(BannerValidation);

const AvatarValidation = {
  image: Yup.mixed().test(
    "fileSize",
    "File size too large. Maximum size is 5MB",
    (value) => {
      if (!value) return true;
      return value.size <= MAX_FILE_SIZE;
    }
  ),
};

export const AvatarValidationSchema = Yup.object(AvatarValidation);

const EditProfileValidation = {
  name: Yup.string()
    .typeError("Please add valid name")
    .required("This field is required"),
  username: Yup.string()
    .required("This field is required")
    .min(3, "username is too short")
    .matches(
      /^[a-zA-Z_][a-zA-Z0-9_]*$/,
      "Username must start with a letter or underscore and can only contain letters, numbers, and underscores"
    )
    .test(
      "no-spaces",
      "Username cannot contain spaces",
      (value) => !/\s/.test(value)
    ),
  dob: Yup.date(),
  bio: Yup.string().max(160, "Your bio is too long"),
  isPrivate: Yup.string()
    .required("This field is required")
    .oneOf(["Public", "Private"], "This is not a valid choice."),
};

export const EditProfileValidationSchema = Yup.object(EditProfileValidation);
