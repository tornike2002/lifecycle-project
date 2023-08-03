import React, { useState } from "react";
import "./EmailValidation.css"
const EmailValidation = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // You can perform further actions with the valid email, such as sending it to the server or displaying a success message.
    alert(`Submitted email: ${email}`);

    // Reset the form
    setEmail("");
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex jutify-content-center align-items-center text-center w-50">
        <input
          type="email"
          id="emailInput"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="form-control vd-e"
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit" className="btn btn-outline-secondary mt-2">Submit</button>
    </form>
  );
};

export default EmailValidation;
