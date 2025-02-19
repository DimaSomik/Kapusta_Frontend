import styles from "../Navigation/Navigation.module.css"; 
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/controllers/authController";
import { selectUserEmail } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const user = useSelector(selectUserEmail);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOut());
        navigate("/");
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Kapu$ta</div> 

            {user && (
                <div className={styles.userInfo}>
                    <div className={styles.userLogo}>U</div>
                    <span className={styles.userName}>{user}</span>
                    <span className={styles.line}></span>
                    <div onClick={handleLogout} className={styles.logout}>Exit</div>
                </div>
            )}
        </header>
    );
};

export default Navigation;