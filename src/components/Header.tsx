import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Welcome, {user?.name || 'Guest'}</h1>
      <div className="text-sm text-gray-600">{user?.role}</div>
    </header>
  );
};

export default Header;