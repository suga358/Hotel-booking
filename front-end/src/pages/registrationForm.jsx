import { useFormik } from "formik";
import "./registrationForm.css";
import axios from "axios";
import { BookingFormSchema } from "./validation";

export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      guest: "",
      adults: "",
      childrens: "",
      checkin: "",
      checkout: "",
      category: "",
    },
    validationSchema: BookingFormSchema,
    onSubmit: async (value) => {
      const response = await axios.post("/bookings", value);
      console.log("response", response);
      formik.resetForm();
      alert(
        "Thank you for Booking,booking details has been sent on your phone !"
      );
    },
  });
  return (
    <div>
      <div id="bg"></div>
      <div id="main">
        <div id="content">
          <h1>Discover the perfect balance of harmony and comfort</h1>
          <h5>
            We are foused on providing clients with the highest level of quality
            and excellent customer support.
          </h5>
        </div>
        <div id="container">
          <form onSubmit={formik.handleSubmit}>
            <h2>Book A Hotel Room</h2>

            <div>
              <input
                name="firstName"
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder="First Name"
              ></input>
              <div className="error">
                {formik.errors.firstName && (
                  <div style={{ color: "red" }}>{formik.errors.firstName}</div>
                )}
              </div>
            </div>
            <div>
              <input
                name="lastName"
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="Last Name"
              ></input>
              <div className="error">
                {" "}
                {formik.errors.lastName && (
                  <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                )}
              </div>
            </div>
            <div>
              <input
                name="phone"
                type={"text"}
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="Phone Number"
              ></input>
              <div className="error">
                {formik.errors.phone && (
                  <div style={{ color: "red" }}>{formik.errors.phone}</div>
                )}{" "}
              </div>
            </div>
            <div>
              <input
                name="email"
                type={"email"}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="E-Mail"
              ></input>
              <div className="error">
                {" "}
                {formik.errors.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}{" "}
              </div>
            </div>

            <div>
              <input
                name="guest"
                type={"number"}
                min={"0"}
                onChange={formik.handleChange}
                value={formik.values.guest}
                placeholder="Guests"
              ></input>
            </div>
            <div>
              <input
                name="adults"
                type={"number"}
                min={"0"}
                onChange={formik.handleChange}
                value={formik.values.adults}
                placeholder="Adults"
              ></input>
            </div>
            <div>
              <input
                name="childrens"
                type={"number"}
                min={"0"}
                onChange={formik.handleChange}
                value={formik.values.childrens}
                placeholder="Childrens"
              ></input>
            </div>
            <div>
              <div id="label">
                <label>Check-in:</label>
              </div>
              <input
                name="checkin"
                type={"date"}
                onChange={formik.handleChange}
                value={formik.values.checkin}
                placeholder="Check-out"
                id="date"
              ></input>
            </div>
            <div>
              <div id="label">
                <label>Check-out:</label>
              </div>
              <input
                name="checkout"
                type={"date"}
                onChange={formik.handleChange}
                value={formik.values.checkout}
                placeholder="Check Out"
                id="date"
              ></input>
            </div>
            <div>
              <div id="label">
                <label>Room Type:</label>
              </div>
              <select name="category" onChange={formik.handleChange}>
              <option>Select Room Type</option>
                <option value={formik.values.single}>Single</option>
                <option value={formik.values.double}>Double</option>
                <option value={formik.values.triple}>Triple</option>
                <option value={formik.values.quad}>Quad</option>
                <option value={formik.values.suite}>Suite</option>
              </select>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div id="background"></div>
      </div>
    </div>
  );
}
