import * as Yup from "yup";

const CreatePostFormValidation = {};

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
