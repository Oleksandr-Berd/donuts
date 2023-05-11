import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


import styles from "./RegistrationForm.module.css";
import { useState } from "react";
import * as API from "../../Utils/helpers";
import { registrationUrl } from "../../Utils/url";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().min(7, "Too Short!").required("Phone is required"),
});

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInput = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    API.postUser(registrationUrl, data).catch((error) =>
      toast.error(`${error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    );
    setData({
      name: "",
      phone: "",
      email: "",
    });
    toast.success("You successfully register!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className={styles.con}>
      <h3 className={styles.title}>
        Apply your personal info for registration
      </h3>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
        }}
        validationSchema={validationSchema}
      >
        <Form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputCon}>
            <Field
              id="name"
              name="name"
              value={data.name}
              placeholder=""
              className={styles.input}
              onChange={handleInput}
            />

            <label htmlFor="name" className={styles.label}>
              Your name
            </label>

            <Field
              id="phone"
              name="phone"
              placeholder=""
              value={data.phone}
              className={styles.input}
              onChange={handleInput}
            />

            <label htmlFor="phone" className={styles.label}>
              Phone number
            </label>

            <Field
              id="email"
              name="email"
              placeholder=""
              value={data.email}
              type="email"
              className={styles.input}
              onChange={handleInput}
            />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </div>
          <button type="submit" className={styles.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
