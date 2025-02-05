import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Product from './pages/Product';
import Orders from './pages/Orders';

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Orders />} />
         </Routes>
      </>
   );
}

export default App;
