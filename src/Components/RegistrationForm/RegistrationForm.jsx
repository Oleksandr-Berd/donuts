import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./RegistrationForm.module.css";
import { useState } from "react";
import { postUser } from "../../Utils/helpers";
import { registrationUrl } from "../../Utils/url";

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("Phone is required")
      .min(7, "Phone must be at least 7 characters"),
  });


const RegistrationForm = () => {

    const [data, setData] = useState({
      name: "",
      phone: "",
      email: "",
    });

 
    
    const handleInput = (evt) => {
        setData({...data,
           [evt.target.name]:evt.target.value
       })
       
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        postUser(registrationUrl, data)
        setData({
          name: "",
          phone: "",
          email: "",
        });
    }

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
          <Field
            id="name"
            name="name"
            value={data.name}
            placeholder=""
            className={styles.input}
            onChange={handleInput}
          />
          {/* <ErrorMessage name="name" /> */}
          {data.name === "" ? (
            <label htmlFor="name" className={styles.label}>
              Your name
            </label>
          ) : (
            <label
              htmlFor="name"
              className={styles.label}
              style={{ display: "none" }}
            >
              Your name
            </label>
          )}

          <Field
            id="phone"
            name="phone"
            placeholder=""
            value={data.phone}
            className={styles.input}
            onChange={handleInput}
          />
          {/* <ErrorMessage name="phone" /> */}
          {data.phone === "" ? (
            <label htmlFor="phone" className={styles.label}>
              Phone number
            </label>
          ) : (
            <label htmlFor="phone" style={{ display: "none" }}>
              Phone number
            </label>
          )}
          <Field
            id="email"
            name="email"
            placeholder=""
            value={data.email}
            type="email"
            className={styles.input}
            onChange={handleInput}
          />
          {/* <ErrorMessage name="email" /> */}
          {data.email === "" ? (
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          ) : (
            <label htmlFor="email" style={{ display: "none" }}>
              Email
            </label>
          )}
          <button type="submit" className={styles.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
