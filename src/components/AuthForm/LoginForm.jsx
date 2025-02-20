import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./AuthForm.module.css";
import * as Yup from "yup";
import sprite from "../../assets/svgs-sprite.svg";
import { useState } from "react";
import { logIn } from "../../redux/controllers/authController";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("This is a required field"),
  password: Yup.string()
    .min(6, "Password too short")
    .max(50, "Password too long")
    .required("This is a required field"),
});

const LoginForm = ({ onToggleForm }) => {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
      navigate("/transaction/expenses");
      actions.resetForm();
    } catch (error) {
      if (error?.response?.data?.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError("An unknown error occurred. Please try again.");
      }
    }
  };

  /** Kod obsługujący część logowania przez google */
  const handleGoogleLogin = () => {
    window.location.href = `https://kapusta-fnr2.onrender.com/auth/google`;
  };

  return (
    <div className={css.form}>
      <p className={css.loginGoogle}>
        You can log in with your Google Account:
      </p>
      <button
        type="button"
        className={css.googleBtn}
        onClick={handleGoogleLogin}
      >
        <svg className={css.icon}>
          <use href={`${sprite}#icon-google-symbol-1`}></use>
        </svg>
        Google
      </button>
      <p className={css.text}>
        Or log in using an email and password, after registering:
      </p>
      {loginError && <div className={css.error}>{loginError}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
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
              <button type="submit" className={css.button}>
                LOG IN
              </button>
              <button
                type="button"
                className={css.button}
                onClick={onToggleForm}
              >
                GO TO REGISTRATION
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
