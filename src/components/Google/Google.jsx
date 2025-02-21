import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User info:", result.user);
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin} style={styles.button}>
      <FcGoogle style={styles.icon} />
      <span style={styles.text}>Google</span>
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "119.2px",
    height: "40px",
    backgroundColor: "rgba(170, 178, 197, 0.2)",
    color: "rgba(0, 0, 0, 1)",
    border: "1px solid rgba(170, 178, 197, 0.2)",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    boxShadow: "1px 2px 3px 0px rgba(170, 178, 197, 0.2)",
    transition: "background-color 0.2s ease",
    position: "absolute",
    top: "277px",
    left: "916.4px",
  },
  icon: {
    width: "17.17px",
    height: "18px",
    top: "288px",
    left: "936.16px",
  },
  text: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16.41px",
    letterSpacing: "2%",
    width: "54.38px",
    height: "20px",
    top: "287px",
    left: "962.87px",
  },
};
export default GoogleLoginButton;
