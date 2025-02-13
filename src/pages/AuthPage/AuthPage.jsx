import { useState } from "react";
import LoginForm from "../../components/AuthForm/LoginForm";
import RegisterForm from "../../components/AuthForm/RegisterForm";
import css from "./AuthPage.module.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={css.section}>
      {isLogin ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegisterForm onToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
