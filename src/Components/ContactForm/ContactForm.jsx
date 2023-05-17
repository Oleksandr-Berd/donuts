import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";

import * as API from "../../Utils/helpers";
import { registrationUrl } from "../../Utils/url";

const ContactForm = () => {

  const validationSchema = Yup.object({
    question: Yup.string().min(2, "Too Short!").required("Question is required"),
    email: Yup.string().email("Invalid email").required("Email is required")
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      question: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      API.postUser(registrationUrl, values).catch((error) =>
        toast.error(`${error}`)
      );
      toast.success("Your request is successfully sent!");
      resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>

      <div className='formControl'>
        <input
          id="email"
          name="email"
          value={formik.values.email}
          className='input'
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="email" className='label'>
          Email
        </label>
        {
          formik.errors.email
          ? <div name="email" className="formError">{formik.errors.email}</div>
          : null
        }
      </div>

      <div className='formControl'>
        <input
          id="question"
          name="question"
          type="text"
          value={formik.values.question}
          className='input'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
        <label htmlFor="question" className='label'>
          Type your question
        </label>
        {
          formik.errors.question
          ? <div name="question" className="formError">{formik.errors.question}</div>
          : null
        }
      </div>

      <button type="submit" className={styles.btn}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
