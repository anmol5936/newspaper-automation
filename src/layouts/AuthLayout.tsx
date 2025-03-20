import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthLayout() {
  const { user } = useAuth();

  // Redirect to dashboard if already authenticated
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen grid place-items-center bg-muted/50">
      <div className="w-full max-w-md p-8 bg-background rounded-lg shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}