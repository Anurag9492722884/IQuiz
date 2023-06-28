import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7018/api/auth/signin",
        {
          username: username,
          password: password,
        }
      );

      const { accessToken, roles } = response.data;
      localStorage.setItem("user", JSON.stringify(response.data));

      if (roles.includes("ROLE_ADMIN")) {
        // Redirect to admin page
        navigate("/dashboard");
      } else {
        navigate("/dashboard");

        // Redirect to dashboard
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const handleLoginAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:7018/api/auth/signin", {
          username,
          password,
        })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        });
      var gg = JSON.parse(localStorage.getItem("user"));
      const name = gg.username;
      const roles_array = gg.roles;
      if (roles_array.indexOf("ROLE_ADMIN") > -1) {
        // history("/Admin-page");
        navigate("/Admin-page");
      }
      if (roles_array.indexOf("ROLE_USER") > -1) {
        // history("/dashboard");
        navigate("/Admin-page");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <main className="login">
      <div>
        <h4>Welcome!</h4>
        <p>Sign in to continue.</p>
      </div>
      <form>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Ankit"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleLoginAdmin}>Admin? Click here to login</button>
        <p>
          Don't have an account? <a href="/sign-up">Sign up</a>
        </p>
      </form>
    </main>
  );
}
