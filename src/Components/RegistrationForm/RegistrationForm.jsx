import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import styles from "./RegistrationForm.module.css";
import { useState } from "react";
import { postUser } from "../../Utils/helpers";
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
        {({ errors, touched }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Field
              id="name"
              name="name"
              value={data.name}
              placeholder=""
              className={styles.input}
              onChange={handleInput}
            />

            {data.name === "" && !errors.name ? (
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
            {errors.name && touched.name ? (
              <div className={styles.errorCon}>{errors.name}</div>
            ) : null}
            <Field
              id="phone"
              name="phone"
              placeholder=""
              value={data.phone}
              className={styles.input}
              onChange={handleInput}
            />
            {data.phone === "" && !errors.phone ? (
              <label htmlFor="phone" className={styles.label}>
                Phone number
              </label>
            ) : (
              <label htmlFor="phone" style={{ display: "none" }}>
                Phone number
              </label>
            )}
            {errors.phone && touched.phone ? (
              <div className={styles.errorCon}>{errors.phone}</div>
            ) : null}

            <Field
              id="email"
              name="email"
              placeholder=""
              value={data.email}
              type="email"
              className={styles.input}
              onChange={handleInput}
            />

            {data.email === "" && !errors.email ? (
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
            ) : (
              <label htmlFor="email" style={{ display: "none" }}>
                Email
              </label>
            )}
            {errors.email && touched.email ? (
              <div className={styles.errorCon}>{errors.email}</div>
            ) : null}
            <button type="submit" className={styles.btn}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
