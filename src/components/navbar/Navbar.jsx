import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import UserPopup from './UserPopup';
import CartPopup from './CartPopup';
import axiosInstance from '../../interceptor';

function Navbar() {
   const { logout } = useAuth();

   const [cartProducts, setCartProducts] = useState([]);
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axiosInstance.post('/get-from-cart/id');
            setCartProducts(response.data);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);

   const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
   const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

   const cartItems = [
      {
         id: 1,
         name: 'Мужские Кроссовки Nike Lebron XVIII Low',
         price: 20,
         quantity: 2,
         image: '/img/jordan11.jpg',
      },
      {
         id: 2,
         name: 'Jeans',
         price: 40,
         quantity: 1,
         image: '/img/lebron.jpg',
      },
      {
         id: 1,
         name: 'T-shirt',
         price: 20,
         quantity: 2,
         image: '/img/jordan11.jpg',
      },
      {
         id: 2,
         name: 'Jeans',
         price: 40,
         quantity: 1,
         image: '/img/lebron.jpg',
      },
      {
         id: 1,
         name: 'T-shirt',
         price: 20,
         quantity: 2,
         image: '/img/jordan11.jpg',
      },
      {
         id: 2,
         name: 'Jeans',
         price: 40,
         quantity: 1,
         image: '/img/lebron.jpg',
      },
      {
         id: 1,
         name: 'T-shirt',
         price: 20,
         quantity: 2,
         image: '/img/jordan11.jpg',
      },
      {
         id: 2,
         name: 'Jeans',
         price: 40,
         quantity: 1,
         image: '/img/lebron.jpg',
      },
      {
         id: 1,
         name: 'T-shirt',
         price: 20,
         quantity: 2,
         image: '/img/jordan11.jpg',
      },
      {
         id: 2,
         name: 'Jeans',
         price: 40,
         quantity: 1,
         image: '/img/lebron.jpg',
      },
   ];

   // Функция для переключения видимости поп-апа пользователя
   const toggleUserPopup = () => {
      setIsUserPopupOpen(!isUserPopupOpen);
   };

   // Функция для переключения видимости поп-апа корзины
   const toggleCartPopup = () => {
      setIsCartPopupOpen(!isCartPopupOpen);
   };

   return (
      <div className="w-[1400px] h-[80px] m-auto flex items-center border-b">
         <div className="flex space-x-4 text-[#363E61] w-[400px] justify-between">
            <NavLink
               to="/"
               className="font-circular text-[18px] font-[900] hover:text-blue-500"
               activeClassName="text-blue-500"
            >
               P-CLOTH
            </NavLink>
            <NavLink
               to="/orders"
               className="font-circular "
               activeClassName="text-blue-500"
            >
               <span className="font-circular text-[18px]">Orders</span>
            </NavLink>
            <span className="font-circular text-[18px]">Payments</span>
            <span className="font-circular text-[18px]">Support</span>
         </div>
         <div className="flex ml-auto space-x-4 items-center w-[120px] justify-between">
            {/* <img
               className="w-[20px] h-[20px] cursor-pointer"
               src="/svg/search.svg"
               alt="search icon"
            /> */}
            <img
               onClick={toggleCartPopup}
               className="w-[20px] h-[20px] cursor-pointer"
               src="/svg/cart.svg"
               alt="cart icon"
            />
            <img
               src={
                  'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109'
               }
               className="w-[40px] h-[40px] rounded-full cursor-pointer"
               alt="avatar"
               onClick={toggleUserPopup}
            />
         </div>
         {isUserPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
               <UserPopup
                  user={user}
                  closePopup={toggleUserPopup}
                  logout={logout}
               />
            </div>
         )}
         {isCartPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
               <CartPopup cartItems={cartItems} closePopup={toggleCartPopup} />
            </div>
         )}
      </div>
   );
}

export default Navbar;
