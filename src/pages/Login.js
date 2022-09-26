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
      <table class="border-separate border border-slate-500 ...">
        <thead>
          <tr>
            <th class="border border-slate-600 ...">State</th>
            <th class="border border-slate-600 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-700 ...">Indiana</td>
            <td class="border border-slate-700 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">Ohio</td>
            <td class="border border-slate-700 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">Michigan</td>
            <td class="border border-slate-700 ...">Detroit</td>
          </tr>
        </tbody>
      </table>

      {/* <h1 className="text-3xl font-bold underline">Hello tailwind</h1>
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
      <button
        onClick={handleLogin}
        className="dark:md:hover:bg-fuchsia-600 py-3 px-3 "
      >
        Login
      </button>
      <Link to="/register">
        <button>New?</button>
      </Link> */}
    </div>
  );
};

export default Login;
