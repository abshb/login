import React, { createContext, useEffect, useState } from "react";

// Create the authentication context
export const AuthContext = createContext({
  isAuthenticated: false,
  username: null,
  login: () => {},
  logout: () => {},
});

// Create the authentication provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const checkLoggedIn = () => {
      const storedToken = localStorage.getItem("access_token");
      const storedUsername = localStorage.getItem("username");

      if (storedToken && storedUsername) {
        login(storedUsername);
      }
    };

    checkLoggedIn();
  }, []);

  const login = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  const value = { isLoggedIn, username, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
