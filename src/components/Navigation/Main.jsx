import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Main.module.css";
import Background from "./Background";
import Navigation from "./Navigation"; 

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
            {/* Navigation jest teraz zawsze renderowany, ale userInfo jest warunkowe */}
            <Navigation 
                userName={user ? user.name : null}
                onLogout={handleLogout} 
            />

            {/* Tytuł "Survivors" tylko na stronie logowania */}
            {!user && isLoginPage && (
                <div className={styles.header}>
                    <div className={styles.logo}>Survivors</div>
                </div>
            )}

            <Background isLoggedIn={!!user} />
        </div>
    );
};

export default Main;