import { useState } from "react";
import AppLogin from "./layout/app/auth/app-login";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogingIn, setIsLogingIn] = useState(false);
  const URL = import.meta.env.VITE_BACKEND_URL;

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

      console.log(response);
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