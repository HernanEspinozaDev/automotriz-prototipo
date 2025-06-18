import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('automotrizUser');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const user = localStorage.getItem('automotrizUser');
  
  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;