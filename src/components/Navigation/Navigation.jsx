import styles from "../Navigation/Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/controllers/authController";
import { selectUserEmail } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/slices/authSlice";
import icon from "../../assets/svgs-sprite.svg";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

const Navigation = () => {
  const user = useSelector(selectUserEmail);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const cancelLogout = () => {
    setShowModal(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.firstLogoBackground}></div>
        <div className={styles.secondLogoBackground}></div>
        <div className={styles.logo}>Kapu$ta</div>
      </div>

      {isLoggedIn && user && (
        <div className={styles.userInfo}>
          <div className={styles.userLogo}>U</div>
          <span className={`${styles.userName} ${styles.hideOnMobile}`}>
            {user}
          </span>
          <span className={`${styles.line} ${styles.hideOnMobile}`}></span>
          <div
            onClick={handleLogout}
            className={`${styles.logout} ${styles.hideOnMobile}`}
          >
            Exit
          </div>
          <div
            className={`${styles.mobileLogout} ${
              isLoggedIn ? "" : styles.hideOnMobile
            }`}
            onClick={handleLogout}
          >
            <svg width="24" height="24">
              <use href={`${icon}#icon-logout-1`}></use>
            </svg>
          </div>
        </div>
      )}
      {showModal && (
        <ConfirmationModal
          message="Do you really want to leave?"
          onConfirm={confirmLogout}
          onCancel={cancelLogout}
        />
      )}
    </header>
  );
};

export default Navigation;
