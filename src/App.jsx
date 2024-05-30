import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(null); // Initialize token state from localStorage if available
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulating token received from authentication
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Set isLoggedIn to true if token is present
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear token from localStorage and set isLoggedIn to false
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: "admin@gmail.com",
          password: "123",
        }
      );
      const responseData = response.data;
      // Handle the response data as needed
      console.log("Response Token:", responseData);

      const access_token = `${responseData.access_token}`;
      const refreshToken = `${responseData.refresh_Token}`;
      localStorage.setItem("token", access_token);
      localStorage.setItem("refresh_token", refreshToken);
      if (access_token) {
        setIsLoggedIn(true);
        nav("/home");
      } else {
        setError("Token not received from the server!");
      }
    } catch (error) {
      setError("incorrect Email or Password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => nav("/articles")} // Navigate to homepage when button is clicked
        >
          Homepage
        </button>
      </form>
    </div>
  );
};

export default App;
