import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
   user: null,
   login: () => {},
   logout: () => {},
});

export const AuthProvider = ({ children }) => {
   const [accessToken, setAccessToken] = useState(null);

   const login = (userData) => {
      setAccessToken(userData);
      localStorage.setItem('user', JSON.stringify(userData));
   };

   const register = (userData) => {
      setAccessToken(userData);
      localStorage.setItem('user', JSON.stringify(userData));
   };

   const logout = () => {
      setAccessToken(null);
      localStorage.removeItem('user');
   };

   return (
      <AuthContext.Provider value={{ accessToken, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   return useContext(AuthContext);
};
