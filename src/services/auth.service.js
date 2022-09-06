import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

const register = (username, email, password) => {
  console.log("axios")
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios.post(API_URL + "signin", {
    email,
    password,
  });
};

const AuthService = {
  register,
  login,
};

export default AuthService;
