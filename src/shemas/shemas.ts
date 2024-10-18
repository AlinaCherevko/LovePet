import * as yup from "yup";

export const schemaReg = yup
  .object({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      //   .matches(
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      //   )
      .required("Password is required"),

    confirmedPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmed password must match the password"
      )
      .required("Password is required"),
  })
  .required();

export const schemaLog = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      //   .matches(
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      //   )
      .required("Password is required"),
  })
  .required();

export const schemaUser = yup.object({
  name: yup.string().nullable(),
  email: yup.string().email("Invalid email format").nullable(),
  avatar: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Avatar should be valid url"
    )
    .nullable(),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, "Phone number is not valid")
    .nullable(),
});

export const schemaPet = yup.object({
  name: yup.string().required("Name is a required field"),
  title: yup.string().required("Title is a required field"),
  species: yup.string().required("Species is a required field"),
  sex: yup.string().required("Gender is a required field"),
  imageUrl: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Avatar should be valid url"
    )
    .nullable(),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date is not valid")
    .required(),
});
