import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../slices/auth";
import { isLoggedIn } from "../slices/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();

  const logState = useSelector(isLoggedIn);

  const handleLogin = () => {
    const params = {
      email: email,
      pwd: pwd,
    };
    dispatch(login(params)).then(() => {
      if (logState) {
        props.history.push("/dashboard");
        window.location.reload();
      } else {
        alert("try again");
      }
    });
  };

  return (
    <div className="div">
      <h1>Sign In</h1>
      <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">
        <button>New?</button>
      </Link>
    </div>
  );
};

export default Login;
