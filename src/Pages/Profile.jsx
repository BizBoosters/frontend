import React, {useState} from 'react';
import bgImage1 from '../assets/bgImage1.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {
    faBriefcaseMedical,
    faBaby,
    faCoffee,
    faDumbbell,
    faMapMarkerAlt,
    faUsers
} from '@fortawesome/free-solid-svg-icons';

const Overview = () => {
    return (
        <div className='flex flex-col gap-3 text-black-500 pr-4'>
            <p className='font-bold text-2xl'>HomeLight careers</p>
            <p className='font-bold text-2xl '>Our vision is a world where every real estate transaction is simple,
                certain, and satisfying everyone.</p>
            <p className='text-base'>We’re the essential technology platform used by hundreds of thousands of homebuyers
                and sellers to partner with top real estate agents and win at any step of the real estate journey —
                whether that’s finding a top agent, securing a competitive mortgage, or ensuring on-time, easy close.
                Every year, we facilitate billions of dollars of real estate on our platform.
                <br/>
                <br/>
                HomeLight empowers people to achieve better outcomes during one of life’s most important events: buying
                or selling their home. Our vision is a world where every real estate transaction is simple, certain, and
                satisfying.</p>
        </div>
    );
};
const People = () => {
    return (
        <div className="people">
            <h2 className="text-2xl font-semibold mb-4">People at Homelight</h2>
            <div className="flex flex-col font-medium gap-4 mt-4">
                <h3>Founder</h3>
                <div className="flex flex-col p-4 border rounded-lg w-3/6 gap-4">
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col'>
                            <h3 className="font-bold mt-2">Drew Uher</h3>
                            <p className="text-sm text-gray-600">CEO • 13 years</p>
                            <p className='text-xs text-gray-400'>San Francisco</p>
                        </div>
                        <img src="https://i.pravatar.cc/100?u=user" alt="Founder Image"
                             className="size-12 rounded-full"/>
                    </div>
                    <p className="mt-2 text-sm text-black-500">Founded <span
                        className='text-blue-500'>@Homelight</span> after buying first home. <br/> Worked at Pubmatic &
                        Morgan Stanley. <br/> Studied at Stanford Graduate School of Business.</p>
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
            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-2">
                    <FontAwesomeIcon icon={faBriefcaseMedical} className="text-blue-500 size-7 p-1"/>
                    <div>
                        <h3 className="font-semibold">Healthcare benefits</h3>
                        <p className="text-gray-600">
                            You’ll receive medical, dental, and vision benefits to keep you in tip-top shape.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-2">
                    <FontAwesomeIcon icon={faBaby} className="text-blue-500 size-7 p-1"/>
                    <div>
                        <h3 className="font-semibold">Parental leave</h3>
                        <p className="text-gray-600">
                            Our parental leave policy includes time for new parents to bond with their baby.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-2">
                    <FontAwesomeIcon icon={faCoffee} className="text-blue-500 size-7 p-1"/>
                    <div>
                        <h3 className="font-semibold">Fully stocked kitchen</h3>
                        <p className="text-gray-600">
                            We provide a variety of healthy snacks and beverages so you can focus on great work.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-2">
                    <FontAwesomeIcon icon={faDumbbell} className="text-blue-500 size-7 p-1"/>
                    <div>
                        <h3 className="font-semibold">Wellness benefits</h3>
                        <p className="text-gray-600">
                            We provide reimbursement for monthly wellness activities and organize office-wide wellness
                            events.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 size-7 p-1"/>
                    <div>
                        <h3 className="font-semibold">Ideally located</h3>
                        <p className="text-gray-600">
                            Our offices are centrally located, close to public transportation, spacious and fun.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4 p-2">
                    <FontAwesomeIcon icon={faUsers} className="text-blue-500 size-7 p-1"/>
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
const Funding = () => {
    return (
        <div className="Funding">
            <h2 className="text-2xl font-semibold mb-4">HomeLight Funding</h2>

            {/* Summary Section */}
            <div className="flex justify-between items-center mb-8 bg-blue-100/30 border-[1px] rounded-lg h-28">
                <div className="flex flex-col text-left p-6 w-full h-full justify-center gap-2">
                    <h3 className="text-black-200 text-xs font-bold uppercase">Valuation</h3>
                    <p className="text-xl font-bold text-black-500">$1.7B</p>
                </div>
                <div
                    className="flex flex-col text-left p-6 w-full h-full justify-center gap-2 relative before:content-[''] before:absolute before:left-0 before:top-[20%] before:bottom-[20%] before:w-[1px] before:bg-gray-300">
                    <h3 className="text-black-200 text-xs font-bold uppercase">Funded Over</h3>
                    <p className="text-xl font-bold text-black-500">11 rounds</p>
                </div>
                <div
                    className="flex flex-col text-left p-6 w-full h-full justify-center gap-2 relative before:content-[''] before:absolute before:left-0 before:top-[20%] before:bottom-[20%] before:w-[1px] before:bg-gray-300">
                    <h3 className="text-black-200 text-xs font-bold uppercase">Incubators</h3>
                    <img src={bgImage1} alt="Incubator Icon"
                         className="w-10 h-10 object-cover rounded-lg border-gray-100"/>
                </div>
            </div>

            {/* Funding Rounds Section */}
            <h3 className="text-lg font-semibold mb-4">Funding Rounds</h3>

            <div className='flex flex-col gap-4'>
                {/* Funding Round - Series D */}
                <div className="flex items-start mb-4">
                    <span
                        className="bg-green-500 text-white rounded-lg border-gray-100 w-8 h-8 flex items-center justify-center font-bold mr-4">D</span>
                    <div>
                        <p className="text-xl font-semibold">$60,000,000</p>
                        <p className="text-gray-500">Series D Extension · Jun 2022 · $1.7B valuation</p>
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                            Amid real estate tech industry layoffs, HomeLight raises $60M and acquires lending startup
                            Accept.inc
                        </a>
                    </div>
                </div>

                {/* Funding Round - Debt */}
                <div className="flex items-start mb-4">
                    <span
                        className="bg-gray-400 text-white rounded-lg border-gray-100 w-8 h-8 flex items-center justify-center font-bold mr-4">-</span>
                    <div>
                        <p className="text-xl font-semibold">$55,000,000</p>
                        <p className="text-gray-500">Debt · Jun 2022</p>
                    </div>
                </div>

                {/* Funding Round - Series A */}
                <div className="flex items-start mb-4">
                    <span
                        className="bg-green-400 text-white rounded-lg border-gray-100 w-8 h-8 flex items-center justify-center font-bold mr-4">A</span>
                    <div>
                        <p className="text-xl font-semibold">$11,000,000</p>
                        <p className="text-gray-500">Series A · Apr 2016</p>
                        <a href="#" className="text-blue-600 hover:underline text-sm">Read press</a>
                    </div>
                </div>

                {/* Funding Round - Seed */}
                <div className="flex items-start mb-4">
                    <span
                        className="bg-yellow-500 text-white rounded-lg border-gray-100 w-8 h-8 flex items-center justify-center font-bold mr-4">S</span>
                    <div>
                        <p className="text-xl font-semibold">$3,000,000</p>
                        <p className="text-gray-500">Seed · Feb 2015</p>
                        <a href="#" className="text-blue-600 hover:underline text-sm">Read press</a>
                    </div>
                </div>

                {/* Funding Round - Seed */}
                <div className="flex items-start">
                    <span
                        className="bg-yellow-500 text-white rounded-lg border-gray-100 w-8 h-8 flex items-center justify-center font-bold mr-4">S</span>
                    <div>
                        <p className="text-xl font-semibold">$1,500,000</p>
                        <p className="text-gray-500">Seed · Feb 2012</p>
                    </div>
                </div>
            </div>
            {/* Investors Section */}
            <h3 className="text-lg font-semibold mt-8 mb-4">Investors of HomeLight</h3>
            <div className="flex space-x-4">
                <div className='flex flex-col gap-6 w-1/3 p-4 rounded-md border border-gray-200 border-b-4'>
                    <div className="flex justify-between">
                        <div className='flex flex-col'>
                            <p className='text-black-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis'
                               style={{maxWidth: '150px'}}>Group 11</p>
                            <p className='text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis'
                               style={{maxWidth: '150px'}}>VC Firm · Beverly Hills</p>
                        </div>
                        <div
                            className="bg-orange-500 text-white w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center font-bold">Gr
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'>Group 11 is an early stage, fin-tech focused venture capital
                        firm</p>
                </div>
                <div className='flex flex-col gap-6 w-1/3 p-4 rounded-md border border-gray-200 border-b-4'>
                    <div className="flex justify-between">
                        <div className='flex flex-col'>
                            <p className='text-black-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis'
                               style={{maxWidth: '150px'}}>Zeev Ventures</p>
                            <p className='text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis'
                               style={{maxWidth: '150px'}}>VC Firm · United States of America</p>
                        </div>
                        <div
                            className="bg-gray-400 text-white w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center font-bold">Zv
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'>Zeev Ventures is an early stage venture fund, managed by Oren
                        Zeev</p>
                </div>
                <div className='flex flex-col gap-6 w-1/3 p-4 rounded-md border border-gray-200 border-b-4'>
                    <div className="flex justify-between">
                        <div className='flex flex-col'>
                            <p className='text-black-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis'
                               style={{maxWidth: '150px'}}>ZenStone Ventures</p>
                            <p className='text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis'
                               style={{maxWidth: '150px'}}>VC Firm · San Francisco</p>
                        </div>
                        <div
                            className="bg-red-500 text-white w-10 h-10 rounded-lg border border-gray-100 flex items-center justify-center font-bold">Zs
                        </div>
                    </div>
                    <p className='text-sm text-gray-500'>Investing in post seed and early venture stage companies driven
                        by tech & data</p>
                </div>

            </div>
        </div>
    );
};
const Stats = () => {
    return (
        <div className='stats'>
            <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
        </div>
    );
};

const Profile = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const renderContent = () => {
        switch (activeTab) {
            case "Overview":
                return <Overview/>;
            case "People":
                return <People/>;
            case "Culture & Benefits":
                return <CultureBenefits/>;
            case "Funding":
                return <Funding/>;
            case "Stats":
                return <Stats/>;
            default:
                return null;
        }
    };

    return (
        <section className="overflow-y-auto p-6 mt-2">
            <div className="w-full">
                {/* Header Section */}
                <div className="flex gap-3 align-middle">
                    <div className="rounded-2xl size-20 bg-cover bg-center overflow-hidden">
                        <img src={bgImage1} alt="Company Logo" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <p className="font-bold text-xl">Homelight</p>
                        <p>Our vision is a world where every real estate transaction is simple, certain, and
                            satisfying everyone.</p>
                        <p className="text-sm italic text-gray-500">500-1001 employees</p>
                    </div>
                </div>

                {/* Badges Section */}
                <div className="flex gap-2 mt-3">
                <span
                    class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  B2C
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  B2B
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  Valuation $1B+
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  3 days ago
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  Valuation $1B+
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  Valuation $1B+
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  Valuation $1B+
                </span>
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                  <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                  </svg>
                  Valuation $1B+
                </span>

                </div>

                <div className='flex gap-8 mt-12 w-full justify-between'>
                    {/* Sub-navbar */}
                    <div className='flex flex-col w-full'>
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
                                        <span
                                            className="absolute left-0 right-0 -bottom-[8px] h-[2px] bg-blue-600 transition-all duration-300"></span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Content for the active tab */}
                        <div className="mt-10">
                            {renderContent()}
                        </div>
                    </div>


                    <div className='flex flex-col text-sm p-4 border-[1px] rounded-lg h-fit w-96 gap-4'>
                        <p className='text-xs font-bold'>ABOUT HOMELIGHT</p>

                        <div className='flex flex-col gap-1'>
                            <p className='font-semibold'>Website</p>
                            <div className='flex gap-2'>
                                <a href="www.homelight.com" className='text-blue-500'>www.homelight.com</a>
                                <div className='flex gap-2'>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook}/>
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
                            <span
                                class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded w-fit dark:text-gray-300">Dark</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-semibold'>Markets</p>
                            <div className='flex flex-wrap gap-1'>
                                        <span
                                            class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                                <span
                                    class="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded w-fit dark:text-gray-300">tags</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
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
