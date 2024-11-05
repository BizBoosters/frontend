// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { }
// import Navbar from './Components/Navbar.jsx'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Navbar/>
//     <App />
//   </StrictMode>,
// )

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import Home from './Pages/Home.jsx';
// import Blogs from './Pages/Blogs.jsx';
// import Community from './Pages/Community.jsx';
// import RaiseFunds from './Pages/RaiseFunds.jsx';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           {/* <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="community" element={<Community />} />
//           <Route path="raisefunds" element={<RaiseFunds />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   </StrictMode>,
// );

import React from "react";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SidebarWithSearch} from "./Components/SideBar"; 
import HomePage from "./Pages/Home";  
import BlogsPage from "./Pages/Blogs";  
import CommunityPage from "./Pages/Community";  
import RaiseFundsPage from "./Pages/RaiseFunds";  
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <SidebarWithSearch />  */}
      <Routes>
        <Route path="/" element={<HomePage />} />          
        <Route path="/blogs" element={<BlogsPage />} />    
        <Route path="/community" element={<CommunityPage />} />  
        <Route path="/raise-funds" element={<RaiseFundsPage />} />  
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
