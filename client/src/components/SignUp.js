import React, { useState } from 'react'
import './styles/forms.css'
import { useNavigate } from "react-router-dom";

export default function SignUp({ setUser }){

  let history = useNavigate();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function validateForm() {
    return firstName.length > 0 && lastName.length > 0 && password.length > 0;
}

function handleSubmit(e) {
  e.preventDefault();
  setErrors([]);
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      
    }),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user)).then(history("/"));
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
}


    return (
      <form onSubmit={handleSubmit}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                required 
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login">sign in?</a>
            </p>
          </div>
        </div>
      </form>
    )
  }
