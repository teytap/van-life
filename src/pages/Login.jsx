import React, { useState } from "react";
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);
  }
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email adress"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
