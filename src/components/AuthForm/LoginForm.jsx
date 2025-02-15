import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./AuthForm.module.css";
import * as Yup from "yup";
import sprite from "../../assets/svgs-sprite.svg";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onToggleForm }) => {
  const [showHidePassword, setShowHidePassword] = useState(false);

  //   const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("This is a required field"),
    password: Yup.string()
      .min(6, "Password too short")
      .max(50, "Password too long")
      .required("This is a required field"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      //   await dispatch(logIn(values)).unwrap();
      actions.resetForm();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={css.form}>
      <p className={css.loginGoogle}>
        You can log in with your Google Account:
      </p>
      <button type="submit" className={css.googleBtn}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-google-symbol-1`}></use>
        </svg>
        Google
      </button>
      <p className={css.text}>
        Or log in using an email and password, after registering:
      </p>
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
