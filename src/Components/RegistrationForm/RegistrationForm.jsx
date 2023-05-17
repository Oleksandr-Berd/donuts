import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


import styles from "./RegistrationForm.module.css";
import * as API from "../../Utils/helpers";
import { registrationUrl } from "../../Utils/url";

const RegistrationForm = () => {

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").required("Name is required"),
    phone: Yup.number().min(7, "Too Short!").required("Phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required")
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: ''
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
    <div className={styles.con} >
      <h3 className={styles.title}>
        Apply your personal info for registration
      </h3>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputCon}>

          <div className='formControl'>
            <input
              id="name"
              name="name"
              value={formik.values.name}
              className='input'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="name" className='label'>
              Your name
            </label>
            {
              formik.errors.name
                ? <div name="name" className="formError">{formik.errors.name}</div>
                : null
            }
          </div>

          <div className='formControl'>
            <input
              id="phone"
              name="phone"
              value={formik.values.phone}
              className='input'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="phone" className='label'>
              Your phome
            </label>
            {
              formik.errors.phone
                ? <div name="name" className="formError">{formik.errors.phone}</div>
                : null
            }
          </div>

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
              Your email
            </label>
            {
              formik.errors.email
                ? <div name="email" className="formError">{formik.errors.email}</div>
                : null
            }
          </div>

        </div>
        <button type="submit" className={styles.btn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
