import React from "react";
import styles from "./Background.module.css";
import BackgroundCabbages from "./BackgroundCabbages";

const Background = ({ isLoginPage, isLoggedIn }) => {
console.log("isLoggedIn w Background:", isLoggedIn);

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
        <div className={`${styles.cabbageBottom} ${isLoggedIn ? styles.hideOnMobileAndDesktop : ""}`}>
        </div>
      )}
    </>
  );
};

export default Background;