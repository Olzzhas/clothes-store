function App() {
   return (
      <div className="w-[1400px] h-full m-auto flex items-center">
         <div className="flex space-x-4">
            <span>Logo</span>
            <span>Men</span>
            <span>Woman</span>
            <span>Kids</span>
            <span>Trending</span>
         </div>
         <div className="flex ml-auto space-x-4 items-center">
            <span>Search</span>
            <span>Cart</span>
            <img
               src="https://avatar.iran.liara.run/public/38"
               className="w-[40px] h-[40px] rounded-full"
               alt="avatar"
            />
         </div>
      </div>
   );
}

export default App;
