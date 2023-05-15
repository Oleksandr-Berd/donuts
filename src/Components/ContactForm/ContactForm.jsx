import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

import * as API from "../../Utils/helpers";
import { registrationUrl } from "../../Utils/url";

const ContactForm = () => {
  const [request, setRequest] = useState({ emailReq: "", question: "" });

  const handleInputRequest = (evt) => {
    setRequest({ ...request, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    API.postUser(registrationUrl, request).catch((error) =>
      toast.error(`${error}`)
    );
    setRequest({
      emailReq: "",
      question: "",
    });
    toast.success("Your request is successfully sent!");


  };

  return (
    <Formik initialValue={{ email: "", question: "" }}>
      <Form className={styles.form} onSubmit={handleSubmit}>

        <div className='formControl'>
          <Field
            id="emailReq"
            name="emailReq"
            value={request.emailReq}
            className='input'
            onChange={handleInputRequest}
          ></Field>
          <label htmlFor="emailReq" className='label'>
            Email
          </label>
        </div>
        
        <div className='formControl'>
          <Field
            id="question"
            name="question"
            value={request.question}
            className='input'
            onChange={handleInputRequest}
          ></Field>
          <label htmlFor="question" className='label'>
            Type your question
          </label>
        </div>
        
        <button type="submit" className={styles.btn}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
