import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../Navigation/Main.module.css";
import Background from "../Navigation/Background";
import Navigation from "../Navigation/Navigation"; 

const Main = ({ isLoginPage, user, setUser }) => { 
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <div className={styles.background}>
            <Navigation 
                userName={user ? user.name : null}
                onLogout={handleLogout} 
            />

            {!user && isLoginPage && (
                <div className={styles.header}>
                    <div className={styles.logo}>Kapu$ta</div>
                </div>
            )}

            <Background isLoggedIn={!!user} />
        </div>
    );
};

export default Main;