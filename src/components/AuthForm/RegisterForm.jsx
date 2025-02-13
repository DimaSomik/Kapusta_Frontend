import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./AuthForm.module.css";

const initialValues = {
  email: "",
  password: "",
  name: "",
};

export function RegisterForm({ onToggleForm }) {
  //   const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      //   await dispatch(register(values)).unwrap();
      actions.resetForm();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  //  const handleSubmit = async (values, actions) => {
  //    try {
  //
  //      await dispatch(register(values)).unwrap();

  //      await dispatch(
  //        logIn({ email: values.email, password: values.password })
  //      ).unwrap();

  //      actions.resetForm();

  return (
    <div className={css.form}>
      <p className={css.textRegister}>To register, complete the fields:</p>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={css.formLabel}>
              <label htmlFor="name">
                <p className={css.labelText}>
                  {touched.name && errors.name ? (
                    <span className={css.errorStar}>*</span>
                  ) : (
                    ""
                  )}
                  Username:
                </p>
              </label>
              <Field
                className={css.field}
                type="text"
                name="name"
                id="name"
                autoComplete="on"
                placeholder="Username"
              />
              <div className={css.error}>
                <ErrorMessage name="name" component="div" />
              </div>
            </div>
            <div className={css.formLabel}>
              <label htmlFor="email">
                <p className={css.labelText}>
                  {touched.email && errors.email ? (
                    <span className={css.errorStar}>*</span>
                  ) : (
                    ""
                  )}
                  Email:
                </p>
              </label>
              <Field
                className={css.field}
                type="email"
                name="email"
                id="email"
                autoComplete="on"
                placeholder="your@email.com"
              />
              <div className={css.error}>
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div className={css.formLabel}>
              <label htmlFor="password">
                <p className={css.labelText}>
                  {touched.password && errors.password ? (
                    <span className={css.errorStar}>*</span>
                  ) : (
                    ""
                  )}
                  Password:
                </p>
              </label>
              <Field
                className={css.field}
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
              />
              <div className={css.error}>
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <div className={css.containerButton}>
              <button
                type="button"
                className={css.button}
                onClick={onToggleForm}
              >
                BACK TO LOGIN
              </button>
              <button type="submit" className={css.button}>
                REGISTRATION
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
