import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [request, setRequest] = useState({ email: "", question: "" });

    return (
      <Formik initialValue={{ email: "", question: "" }}>
        <Form className={styles.form}>
          <Field
            id="emailRequest"
            name="emailRequest"
            value={request.email}
            className={styles.input}
          ></Field>
          <Field
            id="question"
            name="question"
            value={request.question}
            className={styles.input}
          ></Field>
        </Form>
      </Formik>
    );
};

export default ContactForm;
