import React from 'react';

const CartPopup = ({ cartItems, closePopup }) => {
   const handleRemoveItem = (id) => {
      // Логика для удаления предмета из корзины
      console.log('Item removed:', id);
   };

   const handleCheckout = () => {
      // Логика для оформления заказа
      console.log('Proceeding to checkout');
      closePopup();
   };

   const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
         return text.substring(0, maxLength) + '...';
      }
      return text;
   };

   return (
      <div style={popupStyles}>
         <div style={popupContentStyles}>
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length > 0 ? (
               <div className="space-y-4">
                  <div style={cartItemsContainerStyles} className="space-y-4">
                     {cartItems.map((item) => (
                        <div
                           key={item.id}
                           className="flex justify-between items-center border-b pb-2"
                        >
                           <div className="w-16 h-16 flex-shrink-0">
                              <img
                                 src={item.image}
                                 alt={item.name}
                                 className="w-full h-full object-cover rounded"
                              />
                           </div>
                           <div className="flex-row ml-4 items-center">
                              <span className="font-bold">
                                 {truncateText(item.name, 20)}
                              </span>
                              <span className="text-gray-500 ml-2">
                                 ${item.price}
                              </span>
                           </div>
                           <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                           >
                              Remove
                           </button>
                        </div>
                     ))}
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                     <span className="font-bold">Total:</span>
                     <span className="font-bold">
                        $
                        {cartItems.reduce(
                           (total, item) => total + item.price * item.quantity,
                           0,
                        )}
                     </span>
                  </div>
                  <button
                     onClick={handleCheckout}
                     className="w-full px-4 py-2 bg-blue-500 text-white rounded mt-4"
                  >
                     Proceed to Checkout
                  </button>
               </div>
            ) : (
               <p>Your cart is empty</p>
            )}
            <button
               onClick={closePopup}
               className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
               Close
            </button>
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
   width: '500px',
   maxHeight: '80vh',
   overflowY: 'auto',
};

const cartItemsContainerStyles = {
   maxHeight: '30vh',
   overflowY: 'auto',
   scrollbarWidth: 'none',
   msOverflowStyle: 'none',
};

const hideScrollbarStyles = `
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default CartPopup;
