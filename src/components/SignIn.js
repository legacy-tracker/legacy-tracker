import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  console.log(email, password);
  return (
    <div>
      <h1>Sign In</h1>
      <h2>Email</h2>
      <input placeholder="email" onChange={handleEmail} />
      <h2>Password</h2>
      <input placeholder="password" onChange={handlePassword} />
      <Link to="/dashboard">
        <button>Submit</button>
      </Link>
    </div>
  );
}
