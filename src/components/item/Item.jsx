import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../interceptor';

function Item({ title, price, img_url, isInCart }) {
   const navigate = useNavigate();
   const [isFav, setIsFav] = useState(isInCart);

   const addToCart = async () => {
      if (!isFav) {
         await axiosInstance.post('add-to-cart', {
            product_id: 5,
            user_id: 16,
         });
      } else {
         await axiosInstance.delete('delete-from-cart', {
            product_id: 5,
            user_id: 16,
         });
      }
   };

   return (
      <div className="w-[240px] h-[280px] border rounded-xl flex mx-[20px] mb-[30px] shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out">
         <div className="w-[80%] h-3/4 mx-auto">
            <img
               onClick={() => navigate('/product')}
               className="mx-auto h-[150px]"
               src={img_url}
               alt="item"
            />
            <div className="py-4">
               <span className="text-[16px] font-inter font-[400] text-[#313131]">
                  {title}
               </span>
            </div>
            <div className="flex justify-between items-center">
               <div>
                  <span className="text-[#BDBDBD] font-inter font-[500]">
                     Цена:{' '}
                  </span>
                  <span className="text-[#313131] font-bold">{price}$</span>
               </div>

               <div>
                  <img
                     src={isFav ? '/svg/checked.svg' : '/svg/plus.svg'}
                     className={
                        isFav
                           ? 'p-2 border rounded-md bg-gradient-to-b from-[#89F09C] to-[#3CC755]'
                           : 'p-2 border rounded-md'
                     }
                     onClick={() => {
                        setIsFav(!isFav);

                        addToCart();
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Item;
