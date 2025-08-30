import { Navigate } from "react-router-dom";

// fake authentication state
const isAuthenticated = false; // change to true to allow access

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
