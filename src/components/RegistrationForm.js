import React, { useState } from "react";
import "./RegistrationForm.css"

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      setMessage("Registration successful!");
      // Perform registration logic here
    } else {
      setMessage("Registration failed. Please enter a valid email and password.");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Next</button>
        <div className={message.includes("failed") ? "error-message" : "success-message"}>
          {message}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
