import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../slices/auth";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const dispatch = useDispatch();

  const handleRegister = () => {
    const params = {
      email: email,
      pwd: pwd,
    };
    dispatch(register(params)).then(() => {
      // props.history.push("/dashboard");
      // window.location.reload();
    });
  };

  return (
    <div className="div">
      <h1>Sign Up</h1>
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
      <br />
      <button onClick={handleRegister}>Register</button>
      <Link to="/login">
        <button>Log In?</button>
      </Link>
    </div>
  );
};

export default Register;
