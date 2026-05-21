import React from 'react';
import { mockUsers } from '../data/mockData';

const Users: React.FC = () => {
  return (
    <div className="p-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">User List</h3>
        <table className="min-w-full border"><thead><tr className="bg-gray-200"><th>Name</th><th>Email</th><th>Role</th></tr></thead>
        <tbody>{mockUsers.map(u => <tr key={u.id}><td className="p-2 border">{u.name}</td><td className="p-2 border">{u.email}</td><td className="p-2 border">{u.role}</td></tr>)}</tbody></table>
      </div>
    </div>
  );
};

export default Users;