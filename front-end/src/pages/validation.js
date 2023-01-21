import * as Yup from "yup";

export const BookingFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Should be only English characters")
    .max(50)
    .required("Mandatory Field"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Should be only English characters")
    .max(50)
    .required("Mandatory Field"),
  phone:Yup.string().required("Mandatory Field"),

  email: Yup.string()
    .email("Invalid email")
    .required("Mandatory Field"),
});