'use client';

import React, { useState } from 'react';
import { axios } from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginPage() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  function handleLogin() {}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login Page</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray:600"
        id="username"
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />

      <label htmlFor="username">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray:600"
        id="password"
        type="password"
        placeholder="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />

      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
        onClick={handleLogin}
      >
        Login here
      </button>
      <Link href="/login">Visit Signup</Link>
    </div>
  );
}

export default LoginPage;
