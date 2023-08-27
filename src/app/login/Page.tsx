'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  async function handleLogin() {
    try {
      const response = await axios.post('/api/users/login', user);
      router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login Page</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray:600 text-black"
        id="username"
        type="text"
        placeholder="username"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />

      <label htmlFor="username">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray:600 text-black"
        id="password"
        type="password"
        placeholder="username"
        value={user.password}
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
