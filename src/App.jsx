<Home/>
{/* <div className='flex flew-wrap flex-col'>
        <div className='flex flex-wrap justify-center w-full'>
            <NavbarDefault/>
        </div>
        <div className='mt-20'>
          <Search/>
        </div>
        <div className='flex flex-wrap flex-row '>
            <div>
              <CardThree/>
            </div>
        </div>
        <FeatureTwo/>
        <FooterFour/>
    </div> */
}
{/* <nav> */
}

{/* <Home/> */
}
{/* <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/community">Community</Link>
        <Link to="/raisefunds">Raise Funds</Link> */
}
{/* </nav> */
}
//     </>
//   )
// =======
// import React from 'react'
// import Navbar from './Components/Navbar'
// import { CardThree } from './Components/Cards'
// import { FooterFour } from './Components/Footer'
// import { FeatureTwo } from './Components/Feature'
// import Search from './Components/Search'
// import Chatbot from './Components/Chatbot'
// import Home from './Pages/Home'

// // import { ProductTwo } from './Components/Cards1'
// // import { Card } from '@material-tailwind/react'
// function App() {
//   return (
//     <>
//     <Home/>
//     {/* <div className='flex flew-wrap flex-col'>
//         <div className='flex flex-wrap justify-center w-full'>
//             <NavbarDefault/>
//         </div>
//         <div className='mt-20'>
//           <Search/>
//         </div>
//         <div className='flex flex-wrap flex-row '>
//             <div>
//               <CardThree/>
//             </div>
//         </div>
//         <FeatureTwo/>
//         <FooterFour/>
//     </div> */}
//       {/* <nav> */}

//         {/* <Home/> */}
//         {/* <Link to="/">Home</Link>
//         <Link to="/blogs">Blogs</Link>
//         <Link to="/community">Community</Link>
//         <Link to="/raisefunds">Raise Funds</Link> */}
//       {/* </nav> */}
//     </>
//   )
// }

// export default App

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Community from "./Pages/Community";
import RaiseFunds from "./Pages/RaiseFunds";
import BlogPage from "./Pages/BlogPage";
import Profile from "./Pages/Profile";
import BlogCreation from "./Pages/BlogCreation";
import ApplicationForm from "./Pages/ApplicationForm";
import Messaging from "./Pages/Messaging";
import Base from "./Pages/Base";

function App() {
    return (
        <Router>
            <Base>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/blogpage/:id" element={<BlogPage/>}/>
                    {/*<Route path="/community" element={<Community/>}/>*/}
                    {/*<Route path="/raise-funds" element={<RaiseFunds/>}/>*/}
                    <Route path="/profile" element={<Profile/>}/>
                    {/* <Route path="/blogpage" element={<BlogPage/>} /> */}
                    <Route path="/blogcreation" element={<BlogCreation/>}/>
                    <Route path="/applicationform" element={<ApplicationForm/>}/>
                    <Route path="/messaging" element={<Messaging/>}/>
                </Routes>
            </Base>
        </Router>
    );
}

export default App;
