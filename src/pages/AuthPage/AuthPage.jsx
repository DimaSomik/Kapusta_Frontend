import { useSelector, useDispatch } from "react-redux";
import { toggleIsLogin } from "../../redux/slices/authSlice";
import { selectIsLogin } from "../../redux/slices/authSlice";
import css from "./AuthPage.module.css";
import LoginForm from "../../components/AuthForm/LoginForm";
import RegisterForm from "../../components/AuthForm/RegisterForm";
import Main from "../../components/Navigation/Main";

const AuthPage = () => {
  let isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(toggleIsLogin());
  };

  return (
    <div className={css.section}>
      <Main />
      {isLogin ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegisterForm onToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
