import styles from "./Background.module.css";
import BackgroundCabbages from "./BackgroundCabbages";

const Background = () => {
  const isLoginPage = false; 
  const isLoggedIn = true;

  return (
    <>
      <div className={styles.cabbageBackground}> 
        <BackgroundCabbages isLoggedIn={isLoggedIn} /> 

        {isLoginPage && (
          <div className={styles.title}>  
            <p>Kapu$ta</p>
            <p className={styles.finance}>SMART FINANCE</p>
          </div>
        )}
      </div>

      {(isLoginPage || isLoggedIn) && (
        <div className={`${styles.cabbageBottom} ${isLoggedIn ? styles.hideOnMobileAndDesktop : ""}`}></div>
      )}
    </>
  );
};

export default Background;