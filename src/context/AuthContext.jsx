import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
   user: null,
   login: () => {},
   logout: () => {},
});

export const AuthProvider = ({ children }) => {
   const [accessToken, setAccessToken] = useState(null);

   const login = async ({ email, password }) => {
      try {
         console.log(email);
         console.log(password);

         const response = await axios.post(
            // здесь тоже поменять
            'http://localhost:8080/api/v1/auth/authenticate',
            {
               email,
               password,
            },
            {
               ContentType: 'application/json',
            },
         );

         console.log(response.data.token);

         setAccessToken(response.data.token);
         localStorage.setItem('accessToken', response.data.token);
      } catch (error) {
         console.log(error);
      }
   };

   // (* читать этот коммент после того как прочитал комменты в файле src/components/auth/Register.jsx) новые поля добавить сюда
   const register = async ({ email, password, name, lastname }) => {
      const response = await axios.post('http://localhost:8080/api/v1/auth', {
         email,
         password,
         name,
         lastname,
         // и сюда
      });

      setAccessToken(response.data.token);
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
   };

   const logout = () => {
      setAccessToken(null);
      localStorage.removeItem('accessToken');
   };

   return (
      <AuthContext.Provider value={{ accessToken, login, register, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   return useContext(AuthContext);
};
