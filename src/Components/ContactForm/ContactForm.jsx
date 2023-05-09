import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [request, setRequest] = useState({ email: "", question: "" });
  
  const handleInputRequest = (evt) => {
    setRequest({ ...request, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    toast.success("Your request is sent")
  }

    return (
      <Formik initialValue={{ email: "", question: "" }}>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Field
            id="emailRequest"
            name="emailRequest"
            value={request.email}
            className={styles.input}
            onChange={handleInputRequest}
          ></Field>
          <label htmlFor="emailRequest" className={styles.label}>
            Email
          </label>
          <Field
            id="question"
            name="question"
            value={request.question}
            className={styles.input}
            onChange={handleInputRequest}
          ></Field>
          <label htmlFor="question" className={styles.label}>
            Type your question
          </label>
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </Form>
      </Formik>
    );
};

export default ContactForm;
