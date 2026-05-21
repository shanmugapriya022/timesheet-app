import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import TimesheetEntry from './components/Dashboard/TimesheetEntry';
import Projects from './components/Projects';
import Users from './components/Users';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: string[] }> = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/dashboard" />;
  return children;
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto bg-gray-100">{children}</main>
    </div>
  </div>
);

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      <Route path="/dashboard" element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>} />
      <Route path="/timesheet" element={<ProtectedRoute allowedRoles={['Employee']}><MainLayout><TimesheetEntry /></MainLayout></ProtectedRoute>} />
      <Route path="/projects" element={<ProtectedRoute allowedRoles={['Admin']}><MainLayout><Projects /></MainLayout></ProtectedRoute>} />
      <Route path="/users" element={<ProtectedRoute allowedRoles={['Admin']}><MainLayout><Users /></MainLayout></ProtectedRoute>} />
      <Route path="/logout" element={<LogoutHandler />} />
    </Routes>
  );
};

const LogoutHandler = () => {
  const { logout } = useAuth();
  React.useEffect(() => { logout(); }, [logout]);
  return <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;