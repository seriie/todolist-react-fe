import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/IsLoggedIn";
import { useProfile } from "./context/Profile";
import AppLogin from "./layout/app/auth/app-login";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogingIn, setIsLogingIn] = useState(false);
  const URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const { fetchUserProfile } = useProfile();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogingIn(true);
    
    try {
      const response = await axios.post(`${URL}/api/auth/login`, {
        email: email,
        password: password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user_id', response.data.userId);
      console.log(response);
      setIsLoggedIn(true);
      await fetchUserProfile();
      navigate('/');
    } catch (e: any) {
      const msg = e.response?.data?.message || "Login Failed!";
      setError(msg);
      console.log("failed to login: ", e);
    } finally {
      setIsLogingIn(false);
    }
  };

  return (
    <AppLogin
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      error={error}
      logingin={isLogingIn}
    />
  );
}