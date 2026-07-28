"use client";

import { useState } from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {

    const res = await fetch("/api/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        username,
        password
      })

    });

    const data = await res.json();

    if (!data.success) {
      return alert(data.message);
    }

    if (data.success) {
      location.href = "/admin";
    }

  } 

  return (

    <div className="checkout">

      <h1>
        Login Admin
      </h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>

  );

}
