import Item from '../item/Item';
import { useState, useEffect } from 'react';
import axiosInstance from '../../interceptor';

function Items() {
   const items = [
      {
         id: 1,
         title: 'Мужские Кроссовки Nike Lebron XVIII Low',
         price: 219,
         size: 'M',
         img_url: '/img/lebron.jpg',
         category: 'Мужские Кроссовки',
      },
      {
         id: 2,
         title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
         price: 189,
         size: 'XL',
         img_url: '/img/kyrie-flytrap.jpg',
         category: 'Мужские Кроссовки',
      },
      {
         id: 3,
         title: 'Мужские Кроссовки Jordan Air 11',
         price: 199,
         size: 'S',
         img_url: '/img/jordan11.jpg',
         category: 'Мужские Кроссовки',
      },

      {
         id: 4,
         title: 'Мужские Кроссовки Nike LeBron XVIII',
         price: 179,
         size: 'L',
         img_url: '/img/lebron-xviii.jpg',
         category: 'Мужские Кроссовки',
      },
      {
         id: 5,
         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
         price: 149,
         size: 'XXL',
         img_url: '/img/nike-blazer-mid.jpg',
         category: 'Мужские Кроссовки',
      },
      {
         id: 6,
         title: 'Кроссовки Puma X Aka Boku Future Rider',
         price: 189,
         size: 'XS',
         img_url: '/img/puma.png',
         category: 'Мужские Кроссовки',
      },
      {
         id: 7,
         title: 'Мужские Кроссовки Nike Kyrie VII',
         price: 199,
         size: 'L',
         img_url: '/img/kyrie7.jpg',
         category: 'Мужские Кроссовки',
      },
      {
         id: 8,
         title: 'Белая Кепка Nike',
         price: 39,
         size: 'L',
         img_url: '/img/nike-white-cap.png',
         category: 'Головной убор',
      },
      {
         id: 9,
         title: 'Коричневая Кепка Lacoste',
         price: 49,
         size: 'L',
         img_url: '/img/lacoste-cap.png',
         category: 'Головной убор',
      },
      {
         id: 10,
         title: 'Желтая Куртка The North Face',
         price: 49,
         size: 'L',
         img_url: '/img/tnf-jacket-yellow.png',
         category: 'Верхняя одежда',
      },
   ];

   const categories_mock = [
      'Мужские Кроссовки',
      'Верхняя одежда',
      'Головной убор',
      'Костюмы',
      'Рубашки',
   ];

   // Получение данных из сервера

   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            // поменяй на верный эндпоинт (localhost:8080 писать здесь не надо, пиши сразу то что пишешь после порта)
            const response = await axiosInstance.get('/api/v1/products'); // <------ HERE
            setProducts(response.data);

            const uniqueCategories = Array.from(
               new Set(response.data.map((product) => product.category.name)),
            );
            setCategories(uniqueCategories);
         } catch (error) {
            alert('Error while fetching data, check console!');
            console.log(error);
         }
      };

      fetchData();
   }, []);

   const [selectedCategory, setSelectedCategory] =
      useState('Мужские Кроссовки');

   // Replace items with products
   const filteredItems = items.filter((item) =>
      item.category.includes(selectedCategory),
   );

   const containerStyle = {
      minHeight: `calc(100vh - 16.25rem)`,
   };

   return (
      <div className="w-[1400px] m-auto mt-4" style={containerStyle}>
         <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-inter font-bold">
               {/* Selected Category */}
               {selectedCategory}
            </h1>

            {/* Map other categories */}
            <div className="flex font-inter font-[400] text-[16px] w-[650px] justify-between text-[#969292]">
               {/* REPLACE categories_mock with categories*/}
               {categories_mock.map((category) => (
                  <span
                     key={category}
                     className={`cursor-pointer hover:opacity-45 transition-all duration-200 ease-in-out ${
                        selectedCategory === category
                           ? 'font-bold text-black'
                           : ''
                     }`}
                     onClick={() => setSelectedCategory(category)}
                  >
                     {category}
                  </span>
               ))}
            </div>
         </div>
         <div className="h-fit mt-6 flex flex-wrap">
            {filteredItems.map((item, index) => {
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
   );
}

export default Items;
