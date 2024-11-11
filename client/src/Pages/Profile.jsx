import React, { useState } from 'react';
import { SidebarWithSearch } from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import NotificationPanel from '../Components/NotificationPanel';
import bgImage1 from '../assets/bgImage1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcaseMedical, faBaby, faCoffee, faDumbbell, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const Overview = () =>{
  return (
    <div className='flex flex-col gap-3 text-black-500 pr-4'>
      <p className='font-bold text-2xl'>HomeLight careers</p>
      <p className='font-bold text-2xl '>Our vision is a world where every real estate transaction is simple, certain, and satisfying everyone.</p>
      <p className='text-base'>We’re the essential technology platform used by hundreds of thousands of homebuyers and sellers to partner with top real estate agents and win at any step of the real estate journey — whether that’s finding a top agent, securing a competitive mortgage, or ensuring on-time, easy close. Every year, we facilitate billions of dollars of real estate on our platform. 
        <br/>
        <br/>
        HomeLight empowers people to achieve better outcomes during one of life’s most important events: buying or selling their home. Our vision is a world where every real estate transaction is simple, certain, and satisfying.</p>
    </div>
  );
};
const People = () => {
  return (
    <div className="flex flex-col w-2/5">
      <h2 className="font-semibold text-lg">People at Company Name</h2>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col p-4 border rounded-lg">
          <img src="https://via.placeholder.com/150" alt="Founder Image" className="w-full rounded-full" />
          <h3 className="font-bold mt-2">Drew Uher</h3>
          <p className="text-sm text-gray-600">CEO • 13 years</p>
          <p className="mt-2 text-sm">Founded @CompanyName after buying first home. Worked at Pubmatic & Morgan Stanley. Studied at Stanford Graduate School of Business.</p>
        </div>
        {/* Add more people as needed */}
      </div>
    </div>
  );
};
const CultureBenefits = () => {
  return (
    <div className="culture-benefits">
      <h2 className="text-2xl font-semibold mb-4">Perks and benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faBriefcaseMedical} className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">Healthcare benefits</h3>
            <p className="text-gray-600">
              You’ll receive medical, dental, and vision benefits to keep you in tip-top shape.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faBaby} className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">Parental leave</h3>
            <p className="text-gray-600">
              Our parental leave policy includes time for new parents to bond with their baby.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faCoffee} className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">Fully stocked kitchen</h3>
            <p className="text-gray-600">
              We provide a variety of healthy snacks and beverages so you can focus on great work.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faDumbbell} className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">Wellness benefits</h3>
            <p className="text-gray-600">
              We provide reimbursement for monthly wellness activities and organize office-wide wellness events.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">Ideally located</h3>
            <p className="text-gray-600">
              Our offices are centrally located, close to public transportation, spacious and fun.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold">Company events</h3>
            <p className="text-gray-600">
              Enjoy team events from happy hours to poker nights that help us bond and grow together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Funding = () => <div>Funding Content</div>;
const Stats = () => <div>Stats Content</div>;

const Profile = () => {
    const [showNotifications, setShowNotification] = useState(false); 
    const toggleNotifications = () => setShowNotification(!showNotifications);
    const [activeTab, setActiveTab] = useState("Overview");

    const renderContent = () => {
      switch (activeTab) {
        case "Overview":
          return <Overview />;
        case "People":
          return <People />;
        case "Culture & Benefits":
          return <CultureBenefits />;
        case "Funding":
          return <Funding />;
        case "Stats":
          return <Stats />;
        default:
          return null;
      }
    };
  
    return (
      <div className="flex h-screen overflow-hidden bg-bgWhite">
        {/* Sidebar */}
        <SidebarWithSearch />

        {/* Main Content */}
        <main className="flex flex-col flex-grow">
          {/* Navbar */}
          <div className={`${showNotifications ? "w-[948px]" : "w-full"}`}>
            <Navbar toggleNotifications={toggleNotifications} />
          </div>

          {/* Scrollable content */}
          <section className="overflow-y-auto p-6 mt-2">
            <div className="w-full">
              {/* Header Section */}
              <div className="flex gap-3 align-middle">
                <div className="rounded-2xl size-20 bg-cover bg-center overflow-hidden">
                  <img src={bgImage1} alt="Company Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-xl">Company Name</p>
                  <p>Our vision is a world where every real estate transaction is simple, certain, and satisfying everyone.</p>
                  <p className="text-sm italic text-gray-500">500-1001 employees</p>
                </div>
              </div>

              {/* Badges Section */}
              <div className="flex gap-2 mt-3">
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  B2C
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  B2B
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  Valuation $1B+
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  3 days ago
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  Valuation $1B+
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  Valuation $1B+
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  Valuation $1B+
                </span>
                <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                  </svg>
                  Valuation $1B+
                </span>
                
              </div>

              <div className='flex gap-8 mt-12 w-10/12 justify-between'>
                {/* Sub-navbar */}
                <div className='flex flex-col'>
                  <div className="flex gap-6 border-b-2 border-gray-200 pb-2 relative">
                    {["Overview", "People", "Culture & Benefits", "Funding", "Stats"].map((tab) => (
                      <button
                        key={tab}
                        className={`sub-nav-item relative ${
                          activeTab === tab ? "text-blue-600" : "text-gray-600"
                        } hover:text-blue-500`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                        {activeTab === tab && (
                          <span className="absolute left-0 right-0 -bottom-[8px] h-[2px] bg-blue-600 transition-all duration-300"></span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Content for the active tab */}
                  <div className="mt-10">
                    {renderContent()}
                  </div>
                </div>


                <div className='flex flex-col text-sm p-4 border-[1px] rounded-lg h-fit w-64 gap-4'>
                  <p className='text-xs font-bold'>ABOUT HOMELIGHT</p>

                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Website</p>
                    <div className='flex gap-2'>
                      <a href="www.homelight.com" className='text-blue-500'>www.homelight.com</a>
                      <div className='flex gap-2'>
                        <a href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Locations</p>
                    <div className='flex flex-col'>
                      <p>Ludhiana</p>
                      <p>Patiala</p>
                    </div>
                  </div>
                  
                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Company Size</p>
                    <p>501-1000</p>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Total Raised</p>
                    <p>$742.5 M</p>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Company Type</p>
                    <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded w-fit dark:text-gray-300">Dark</span>
                  </div>

                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Markets</p>
                    <div className='flex flex-wrap gap-1'>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                      <span class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Notifications Container */}
        {showNotifications && (
          <NotificationPanel />
        )}
      </div>
    );
};

export default Profile;


// import React, { useState } from 'react';
// import { SidebarWithSearch } from '../Components/SideBar';
// import Navbar from '../Components/Navbar';
// import NotificationPanel from '../Components/NotificationPanel';
// import bgImage1 from '../assets/bgImage1.svg';


// const Profile = () => {
//     const [showNotifications, setShowNotification] = useState(false); 
//     const toggleNotifications = () => setShowNotification(!showNotifications);

//     return (
//       <div className="flex h-screen overflow-hidden bg-bgWhite">
//         {/* Sidebar */}
//         <SidebarWithSearch />

//         {/* Main Content */}
//         <main className="flex flex-col flex-grow">
//           {/* Navbar */}
//           <div className={`${showNotifications ? "w-[948px]" : "w-full"}`}>
//             <Navbar toggleNotifications={toggleNotifications} />
//           </div>

//           {/* Scrollable Content */}
//           <section className="overflow-y-auto p-6 mt-2 flex gap-4">
//             {/* Left Container with Company Info */}
//             <div className="flex-grow">
//               <div className="flex gap-3 align-middle mb-6">
//                 <div className="rounded-2xl size-20 bg-cover bg-center overflow-hidden">
//                   <img src={bgImage1} alt="image description" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <p className="font-bold">Company Name</p>
//                   <p>Our vision is a world where every real estate transaction is simple, certain, and satisfying everyone.</p>
//                   <p className="text-sm italic text-gray-500">500-1001 employees</p>
//                 </div>
//               </div>
        
//             </div>
//           </section>
//         </main>

//         {/* Notifications Panel */}
//         {showNotifications && <NotificationPanel />}
//       </div>
//     );
// };

// export default Profile;
