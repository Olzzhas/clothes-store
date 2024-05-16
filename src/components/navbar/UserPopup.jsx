import React, { useState } from 'react';
import axiosInstance from '../../interceptor';

const UserPopup = ({ user, closePopup, logout }) => {
   const [firstName, setFirstName] = useState(user.firstname);
   const [lastName, setLastName] = useState(user.lastname);
   const [email, setEmail] = useState(user.email);
   const [password, setPassword] = useState('');

   const handleSave = async () => {
      // Логика для сохранения изменений данных пользователя
      console.log('User data saved:', { firstName, lastName, email });

      await axiosInstance.post('/user-update', {
         email,
         firstName,
         lastName,
         password,
      });

      closePopup();
   };

   const handleLogout = () => {
      logout();
      closePopup();
   };

   return (
      <div style={popupStyles}>
         <div style={popupContentStyles}>
            <h2 className="text-2xl font-bold mb-4">Edit User Data</h2>
            <label className="block mb-2">
               First Name:
               <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border rounded mt-1"
               />
            </label>
            <label className="block mb-2">
               Last Name:
               <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded mt-1"
               />
            </label>
            <label className="block mb-4">
               Email:
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded mt-1"
               />
            </label>
            <label className="block mb-4">
               Password:
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded mt-1"
               />
            </label>
            <div className="flex justify-between">
               <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
               >
                  Save
               </button>
               <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded"
               >
                  Logout
               </button>
               <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
               >
                  Close
               </button>
            </div>
         </div>
      </div>
   );
};

const popupStyles = {
   position: 'fixed',
   top: '0',
   left: '0',
   width: '100%',
   height: '100%',
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
};

const popupContentStyles = {
   backgroundColor: 'white',
   padding: '20px',
   borderRadius: '10px',
   textAlign: 'center',
   width: '300px',
};

export default UserPopup;
