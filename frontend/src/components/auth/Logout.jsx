import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

// Target of the "/logout" link in the Main frontend's student sidebar
// (that link had no route). Clears the session and goes to /login.
function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default Logout;
