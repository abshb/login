import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const handleSignup = (event) => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  const email = event.target.elements.email.value;
  const data = {
    email: email,
    username: username,
    password: password,
  };
  axios
    .post("http://localhost:4000/users/signup", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <div>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="email"
            autoComplete="email"
            name="email"
          />
          <input
            type="text"
            placeholder="username"
            autoComplete="username"
            name="username"
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="current-password"
            name="password"
          />
          <button>Signup</button>
          <p>
            Already have an account ?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
