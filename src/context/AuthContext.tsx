import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
  role: 'Admin' | 'Employee';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    if (email === 'admin@example.com' && password === 'admin') {
      setUser({ name: 'Admin User', email, role: 'Admin' });
      return true;
    } else if (email === 'employee@example.com' && password === 'employee') {
      setUser({ name: 'Employee User', email, role: 'Employee' });
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    // Simple signup – always creates an Employee role
    setUser({ name, email, role: 'Employee' });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};