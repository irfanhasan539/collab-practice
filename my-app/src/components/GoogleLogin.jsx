import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import googleLogo from "../assets/google.png";

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Login Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button type="button" className="google-btn" onClick={handleGoogleLogin}>
      <img src={googleLogo} alt="Google logo" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
