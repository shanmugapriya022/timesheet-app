import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <div className="w-64 bg-blue-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">TIMESHEET</h2>
      <nav>
        <ul>
          <li className="mb-3">
            <NavLink to="/dashboard" className={({ isActive }) => `block p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>Dashboard</NavLink>
          </li>
          {role === 'Admin' && (
            <>
              <li className="mb-3"><NavLink to="/projects" className={({ isActive }) => `block p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>Projects</NavLink></li>
              <li className="mb-3"><NavLink to="/users" className={({ isActive }) => `block p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>Users</NavLink></li>
            </>
          )}
          {role === 'Employee' && (
            <li className="mb-3"><NavLink to="/timesheet" className={({ isActive }) => `block p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-blue-700'}`}>My Timesheet</NavLink></li>
          )}
          <li className="mt-8"><NavLink to="/logout" className="block p-2 rounded hover:bg-red-600">Logout</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;