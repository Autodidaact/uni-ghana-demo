import React, {useState} from 'react'
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import './styles/forms.css'

export default function Login({ setUser }) {

  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  
  
  function handleSubmit(e) {
    e.preventDefault();
  
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }

    return (
      <form onSubmit={handleSubmit}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h3>Sign In</h3>
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
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {errors.map((err) => (
                <Alert key={err}>{err}</Alert>
              ))}
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </form>
    )
  }
