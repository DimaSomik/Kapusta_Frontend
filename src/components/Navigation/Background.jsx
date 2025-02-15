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
<p>Survivors</p>
 </div>
)}
</div>

{isLoginPage && (
 <div className={styles.cabbageBottom}></div>
 )}
 </>
);
};

export default Background;