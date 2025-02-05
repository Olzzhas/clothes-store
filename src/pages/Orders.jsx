import { useState, useEffect } from 'react';
import EmptyOrder from '../components/EmptyOrder';
import Footer from '../components/footer/Footer';
import Item from '../components/item/Item';
import Navbar from '../components/navbar/Navbar';
import axiosInstance from '../interceptor';

function Orders() {
   const user = JSON.parse(localStorage.getItem('user'));

   const [orders, setOrders] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axiosInstance.get(
               `/api/purchases/user/${user.userId}`,
            );

            setOrders(response.data);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);

   const containerStyle = {
      minHeight: `calc(100vh - 16.25rem)`,
   };

   return (
      <>
         <Navbar />

         {orders.length > 0 ? (
            <div className="w-[1400px] m-auto mt-4" style={containerStyle}>
               <div className="flex items-center justify-between">
                  <h1 className="text-[32px] font-inter font-bold">
                     {/* Selected Category */}
                     История заказов
                  </h1>
               </div>
               <div className="h-fit mt-6 flex flex-wrap">
                  {orders.map((item, index) => {
                     return (
                        <Item
                           // replace item.title with item.name or change name to title in java
                           title={item.title}
                           price={item.price}
                           img_url={item.img_url}
                           key={index}
                        />
                     );
                  })}
               </div>
            </div>
         ) : (
            <EmptyOrder />
         )}

         <Footer />
      </>
   );
}

export default Orders;
