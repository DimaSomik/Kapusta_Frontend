import { useSelector, useDispatch } from "react-redux";
import { toggleIsLogin } from "../../redux/slices/authSlice";
import { selectIsLogin } from "../../redux/slices/authSlice";
import css from "./AuthPage.module.css";
import LoginForm from "../../components/AuthForm/LoginForm";
import RegisterForm from "../../components/AuthForm/RegisterForm";
import Main from "../../components/Navigation/Main";
import sprite from "../../assets/svgs-sprite.svg";

const AuthPage = () => {
  let isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(toggleIsLogin());
  };

  return (
    <>
      <div className={css.background}>
        <svg className={css.kapustas}>
          <use href={`${sprite}#icon-upper-kapustas`}></use>
        </svg>
        <svg className={css.title}>
          <use href={`${sprite}#icon-title`}></use>
        </svg>
        <svg className={css.top}>
          <use href={`${sprite}#icon-two-kapustas`}></use>
        </svg>
        <svg className={css.bottom}>
          <use href={`${sprite}#icon-two-kapustas`}></use>
        </svg>
      </div>
      <Main />
      {isLogin ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegisterForm onToggleForm={toggleForm} />
      )}
    </>
  );
};

export default AuthPage;
