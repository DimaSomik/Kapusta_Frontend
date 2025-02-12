import React, { useState, useEffect } from "react";
import styles from "../Background/Background.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx"; 

const Background = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    Navigate("/login");
  };

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <div className={styles.logo}>Survivors</div>
        <div className={styles.userExitContainer}>
          <div className={styles.userLogo}>U</div>

          {!isMobile && (
            <>
              <div className={styles.username}>User Name</div>
              <span className={styles.line}>|</span>

              <LogoutButton onLogout={handleLogout} />
            </>
          )}

          {isMobile && (
            <div className={styles.logout} onClick={handleLogout}>
              <img src="" alt="Logout" />
            </div>
          )}
        </div>
      </div>

      <div className={styles.cabbageBackground}></div>

      <div className={styles.cabbageContainer}>
        <div className={styles.cabbage1}></div>
        <div className={styles.cabbage2}></div>
        <div className={styles.cabbage3}></div>
        <div className={styles.cabbage4}></div>
        <div className={styles.cabbage5}></div>
        <div className={styles.cabbage6}></div>
        <div className={styles.cabbage7}></div>
        <div className={styles.cabbage8}></div>
        <div className={styles.cabbage9}></div>
        <div className={styles.cabbage10}></div>
        <div className={styles.cabbage11}></div>
        <div className={styles.cabbage12}></div>
        <div className={styles.cabbage13}></div>
        <div className={styles.cabbage14}></div>

        <div className={styles.cabbages}></div>
      </div>
    </div>
  );
};

export default Background;
