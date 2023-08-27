'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleSignup() {}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup Page</h1>
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

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray:600"
        id="email"
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
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
        onClick={handleSignup}
      >
        Signup here
      </button>
      <Link href="/login">Visit login</Link>
    </div>
  );
}

export default Signup;
