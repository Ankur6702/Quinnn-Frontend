import * as Yup from "yup";
import { countries } from "./countries";
import { timesOfDay } from "./timesOfDay";

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

export const typeOfEvent = [
  {
    label: "Online",
    value: "Online",
  },
  {
    label: "In Person",
    value: "Offline",
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
  postText: Yup.string().max(3000, "Caption is too long"),
};

export const CreatePostFormValidationSchema = Yup.object(
  CreatePostFormValidation
);

const CreateCommentsFormValidation = {
  text: Yup.string(),
};

export const CreateCommentsFormValidationSchema = Yup.object(
  CreateCommentsFormValidation
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

const CreateBlogFormValidation = {
  title: Yup.string()
    .required("Title is required")
    .max(120, "Title is too long"),
  coverImage: Yup.mixed()
    .test("fileSize", "File size too large. Maximum size is 5MB", (value) => {
      if (!value) return true;
      return value.size <= MAX_FILE_SIZE;
    })
    .required("Image is required"),
};

export const CreateBlogFormValidationSchema = Yup.object(
  CreateBlogFormValidation
);

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

const CreateEventValidation = {
  title: Yup.string()
    .typeError("Please add valid name")
    .required("Event name is required")
    .min(3, "Event name is too short")
    .max(50, "Event name is too long"),
  description: Yup.string()
    .required("Event description is required")
    .min(20, "Description is too short")
    .max(3000, "Event description is too long"),
  eventImage: Yup.mixed()
    .required("Event cover image is required")
    .test("fileSize", "File size too large. Maximum size is 5MB", (value) => {
      if (!value) return true;
      return value.size <= MAX_FILE_SIZE;
    }),
  startDate: Yup.date()
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Start date must be greater than or equal to today"
    )
    .required("Start date is required"),
  startTime: Yup.string()
    .test("is-time", "Invalid start time format", (value) => {
      // Regular expression to validate time in the format "HH:MM"
      const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      return timeRegex.test(value);
    })
    .required("Start time is required"),
  endDate: Yup.date()
    .when("startDate", (startDate, schema) => {
      return startDate && startDate[0]
        ? schema.min(
            startDate[0],
            "End date must be greater than or equal to start date"
          )
        : schema;
    })
    .required("End date is required"),
  endTime: Yup.string()
    .test("is-time", "Invalid start time format", (value) => {
      // Regular expression to validate time in the format "HH:MM"
      const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      return timeRegex.test(value);
    })
    .required("End time is required"),
  isOnline: Yup.string().required("Please select an event type"),
  link: Yup.string().required("This field is required"),
};

export const CreateEventValidationSchema = Yup.object(CreateEventValidation);
