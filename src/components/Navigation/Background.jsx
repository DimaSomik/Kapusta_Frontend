import { useSelector } from "react-redux"; 
import { selectIsLoggedIn } from "../../redux/slices/authSlice"; 
import styles from "./Background.module.css";
import BackgroundCabbages from "./BackgroundCabbages";
import icon from "../../assets/svgs-sprite.svg";

const Background = () => {
  const isLoginPage = true; 
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  console.log("isLoginPage:", isLoginPage); 
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <>
      <div className={styles.cabbageBackground}> 
        <BackgroundCabbages isLoggedIn={isLoggedIn} /> 

        {isLoginPage && !isLoggedIn && (
          <div className={styles.title}>  
            <p>Kapu$ta</p>
            <p className={styles.finance}>SMART FINANCE</p>
          </div>
        )}
      </div>

      {(isLoginPage || isLoggedIn) && (
        <div className={`${styles.cabbageBottom} ${isLoggedIn ? styles.hideOnMobileAndDesktop : ""}`}>
          <svg width="50" height="50">
            <use href={`${icon}#icon-two-kapustas`} />
          </svg>
        </div>
      )}
    </>
  );
};

export default Background;
