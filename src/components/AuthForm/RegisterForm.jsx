import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./AuthForm.module.css";
import sprite from "../../assets/svgs-sprite.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/controllers/authController";

const initialValues = {
  email: "",
  password: "",
  name: "",
};

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

export function RegisterForm({ onToggleForm }) {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      dispatch(register({
        email: values.email,
        password: values.password
      }));
      actions.resetForm();
    } catch (error) {
      if (error?.response?.data?.message) {
      setRegisterError(error.response.data.message); 
    } else {
      setRegisterError("An unknown error occurred. Please try again.");
    }
    }
  };

    /** Kod obsługujący część logowania przez google */
  const handleGoogleLogin = () => {
    window.location.href = `https://kapusta-fnr2.onrender.com/auth/google`;
  };

  return (
    <div className={css.form}>
      <p className={css.textRegister}>To register, complete the fields:</p>
      {registerError && <div className={css.error}>{registerError}</div>}
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
              <div className={css.passwordWrapper}>
                <Field
                  className={css.field}
                  type={showHidePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                />
                <button
                  className={css.eyeBtn}
                  onClick={() => setShowHidePassword(!showHidePassword)}
                  type="button"
                >
                  <svg className={css.eyeBtnIcon}>
                    <use
                      href={
                        showHidePassword
                          ? `${sprite}#icon-eye`
                          : `${sprite}#icon-eye-blocked`
                      }
                    />
                  </svg>
                </button>
              </div>
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
            <p className={css.loginGoogle}>
              Or sign up with your Google account
            </p>
            <button type="button" className={css.googleBtn} onClick={handleGoogleLogin}>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-google-symbol-1`}></use>
              </svg>
              Google
            </button>
    </div>
  );
}

export default RegisterForm;
