import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import User from '../services/user-services';
import Auth from '../services/auth-services';
import { TOKEN_KEY, ID } from '../config';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [statusError, setErrorLogin] = useState({
    loginError: {},
    signupError: {},
    updateError: {},
  });

  const userID = sessionStorage.getItem(ID);

  useEffect(() => {
    const user = setTimeout(() => {
      User.getUser(userID)
        .then((u) => setUser(u))
        .catch(console.log);
    }, 500);
    return () => clearTimeout(user);
  }, []);

  function login(credentials) {
    Auth.login(credentials)
      .then((u) => setUser(u))
      .catch((error) =>
        setErrorLogin({
          ...statusError,
          loginError: error,
        })
      );
  }

  function logout() {
    console.log('hola');
    Auth.logout()
      .then(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(ID);
        setUser(null);
      })
      .catch(console.log);
  }

  function signUp(userData) {
    User.createUser(userData)
      .then((u) => setUser(u))
      .catch((error) =>
        setErrorLogin({
          ...statusError,
          signupError: error,
        })
      );
  }

  function upDate(userData) {
    User.upDateUser(userData)
      .then((u) => setUser(u))
      .catch((error) =>
        setErrorLogin({
          ...statusError,
          update: JSON.stringify(error),
        })
      );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        signUp,
        upDate,
        statusError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { useUser, UserProvider };
