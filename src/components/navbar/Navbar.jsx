import { NavLink } from 'react-router-dom';

function Navbar() {
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
            <span className="font-circular text-[18px]">News</span>
            <span className="font-circular text-[18px]">Payments</span>
            <span className="font-circular text-[18px]">Support</span>
         </div>
         <div className="flex ml-auto space-x-4 items-center w-[200px] justify-between">
            <img
               className="w-[20px] h-[20px]"
               src="/svg/search.svg"
               alt="search icon"
            />
            <img
               className="w-[20px] h-[20px]"
               src="/svg/cart.svg"
               alt="cart icon"
            />

            <img
               src="https://avatar.iran.liara.run/public/38"
               className="w-[40px] h-[40px] rounded-full"
               alt="avatar"
            />
         </div>
      </div>
   );
}

export default Navbar;
