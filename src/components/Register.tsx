import { useState } from "react";
import AppRegister from "./layout/app/auth/app-register";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const URL = import.meta.env.VITE_BACKEND_URL;

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);

    try {
      if(!username || !email || !password) {
        setError("Please fill all fields!");
        return;
      }
      
      const response = await axios.post(`${URL}/api/auth/register`, {
        name: username,
        email,
        password,
      });
      
      console.log(response);
    } catch (e: any) {
      const msg = e.response?.data?.message || "Failed to register!";
      setError(msg);
      console.log("error registering: ", e);
    } finally {
      setIsRegistering(false);
    }
  }

  return (
    <AppRegister
      username={username}
      email={email}
      password={password}
      onUsernameChange={handleUsernameChange}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      error={error}
      registering={isRegistering}
    />
  );
}