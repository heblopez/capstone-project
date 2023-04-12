import { useEffect, useState } from 'react';
import { createContext } from 'react';
import User from '../services/user-services';

const UserContext = createContext();

function UserProvider() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = setTimeout(() => {
      User.getUser()
        .then((u) => setUser(u))
        .catch(console.log);
    }, 500);
    return () => clearTimeout(user);
  }, []);
}
