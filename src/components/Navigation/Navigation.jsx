import React, { useState, useEffect } from 'react';
import styles from "./Navigation.module.css"; 
import { useNavigate } from 'react-router-dom';

const Navigation = ({ userName: propUserName, onLogout }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        setUserName(propUserName || JSON.parse(localStorage.getItem("user"))?.name || "");
    }, [propUserName]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("user_id");

    console.log("You are log out!");
    if(onLogout ) {
        onLogout();
    }

    navigate("/login");
};

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Survivor</div> 

            {userName && (
                <div className={styles.userInfo}>
                    <div className={styles.userLogo}>U</div>
                    <span className={styles.userName}>{userName}</span>
                    <span className={styles.line}></span>
                    <div onClick={handleLogout} className={styles.logout}>Exit</div>
                </div>
            )}
        </header>
    );
};

export default Navigation;