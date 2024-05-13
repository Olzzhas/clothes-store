import Item from '../item/Item';

function Items() {
   const items = [
      {
         id: 1,
         title: 'Мужские Кроссовки Nike Lebron XVIII Low',
         price: 219,
         size: 'M',
         img_url: '/img/lebron.jpg',
      },
      {
         id: 2,
         title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
         price: 189,
         size: 'XL',
         img_url: '/img/kyrie-flytrap.jpg',
      },
      {
         id: 3,
         title: 'Мужские Кроссовки Jordan Air 11',
         price: 199,
         size: 'S',
         img_url: '/img/jordan11.jpg',
      },

      {
         id: 4,
         title: 'Мужские Кроссовки Nike LeBron XVIII',
         price: 179,
         size: 'L',
         img_url: '/img/lebron-xviii.jpg',
      },
      {
         id: 5,
         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
         price: 149,
         size: 'XXL',
         img_url: '/img/nike-blazer-mid.jpg',
      },
      {
         id: 6,
         title: 'Кроссовки Puma X Aka Boku Future Rider',
         price: 189,
         size: 'XS',
         img_url: '/img/puma.png',
      },
      {
         id: 7,
         title: 'Мужские Кроссовки Nike Kyrie VII',
         price: 199,
         size: 'L',
         img_url: '/img/kyrie7.jpg',
      },
   ];

   return (
      <div className="w-[1400px] m-auto mt-4">
         <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-inter font-bold">
               Мужские Кроссовки
            </h1>

            <div className="flex font-inter font-[400] w-[600px] justify-between text-[#969292]">
               <span className="cursor-pointer hover:opacity-45 transition-all duration-200 ease-in-out">
                  Куртки
               </span>
               <span className="cursor-pointer hover:opacity-45 transition-all duration-200 ease-in-out">
                  Головной убор
               </span>
               <span className="cursor-pointer hover:opacity-45 transition-all duration-200 ease-in-out">
                  Костюмы
               </span>
               <span className="cursor-pointer hover:opacity-45 transition-all duration-200 ease-in-out">
                  Шорты
               </span>
               <span className="cursor-pointer hover:opacity-45 transition-all duration-200 ease-in-out">
                  Рубашки
               </span>
            </div>
         </div>
         <div className="h-fit mt-6 flex flex-wrap justift-between">
            {items.map((item, index) => {
               return (
                  <Item
                     title={item.title}
                     price={item.price}
                     img_url={item.img_url}
                     key={index}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default Items;
