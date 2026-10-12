// Where each backend role lands after signing in. Roles match the
// `Role` enum in backend/prisma/schema.prisma (ADMIN | TPO | STUDENT).
export function getHomePath(role) {
  switch (role) {
    case 'ADMIN':
      return '/admin-dashboard';
    case 'STUDENT':
      return '/student/dashboard';
    case 'TPO':
      return '/tpo/dashboard';
    default:
      return '/';
  }
}
