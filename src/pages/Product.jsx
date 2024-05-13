import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function Product() {
   return (
      <>
         <Navbar />

         <div className="w-[1400px] m-auto mt-8 flex-1 flex">
            {/* Image */}
            <div className="w-[350px] border rounded-2xl mr-8">
               <img
                  className="w-full"
                  src="/img/kyrie-flytrap.jpg"
                  alt="product"
               />
            </div>

            {/* Product Info */}
            <div className="flex-1 flex flex-col">
               {/* Title */}
               <span className="font-inter font-[500] text-2xl mb-4">
                  Мужские Кроссовки Nike Kyrie Flytrap IV
               </span>

               {/* Description */}
               <span className="text-gray-600 mb-4">
                  {' '}
                  {/* Add margin-bottom to the description */}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit quae rem laudantium ipsam iusto vero? Possimus totam
                  tempora nisi eaque ducimus quam eveniet voluptatem corporis
                  ipsam accusantium obcaecati, iusto praesentium?
               </span>

               {/* Price */}
               <div className="flex items-center">
                  {' '}
                  {/* Container for price and button */}
                  <span className="text-2xl font-semibold">$189</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
}

export default Product;
