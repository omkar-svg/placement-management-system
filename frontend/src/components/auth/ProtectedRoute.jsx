import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { getHomePath } from '../../utils/roleRoutes.js';

// Wraps a page that needs a logged-in user with one of `allowedRoles`.
//
// This is a convenience for the UI only — the real enforcement is on the
// backend (authMiddleware + roleMiddleware), which rejects the API calls
// of anyone without the right role.
function ProtectedRoute({ allowedRoles, children }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={getHomePath(user.role)} replace />;
  }

  return children;
}

export default ProtectedRoute;
