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
      toast.error(`${error}`)
    );
    setData({
      name: "",
      phone: "",
      email: "",
    });
    toast.success("You successfully register!");
  };

  return (
    <div className={styles.con} >
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

            <div className='formControl'>
              <Field
                id="name"
                name="name"
                value={data.name}
                placeholder=""
                className='input'
                onChange={handleInput}
              />

              <label htmlFor="email" className='label'>
                Your name
              </label>
            </div>

            <div className='formControl'>
              <Field
                id="phone"
                name="phone"
                placeholder=""
                value={data.phone}
                className='input'
                onChange={handleInput}
              />
              <label htmlFor="email" className='label'>
                Phone number
              </label>
            </div>
            
            <div className='formControl'>
              <Field
                id="email"
                name="email"
                placeholder=""
                value={data.email}
                type="email"
                className='input'
                onChange={handleInput}
              />
              <label htmlFor="email" className='label'>
                Email
              </label>
            </div>
            
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
