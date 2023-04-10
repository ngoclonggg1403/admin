import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import  Products  from './pages/Products'
import HomePages from "./pages/home";
import Users from "./pages/Users";
// import React, { useState } from 'react';

function defaultApp() {
  // // const [isDetail, setIsDetail] = useState(false);

  // const handleItemClick = () => {
  //   setIsDetail(true);
  // }

  // const handleBackButtonClick = () => {
  //   setIsDetail(false);
  // }

  
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route  path="/products" element={<Products />} />
            <Route  path="/" element={<HomePages />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
        {/* <>
      {isDetail ? (
        <Products onBackButtonClick={handleBackButtonClick} />
      ) : (
        <HomePages onItemClick={handleItemClick} />
      )}
    </> */}
    </div>
    
  );
}

export default defaultApp;
