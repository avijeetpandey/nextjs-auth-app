'use client';

import React from 'react';
import axios from 'axios';

export default function ProfilePage() {
  async function handleLogout() {
    await axios.get('/api/users/logout');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile page</h1>
      <button
        className="p-2 bg-blue-500 border border-gray-300 rounded-lg mb-4 focus:outline-none"
        onClick={handleLogout}
      >
        Logout here
      </button>
    </div>
  );
}
