import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FooterFour } from '../Components/Footer'
import heroImg from '../assets/HeroImg.svg'
import AuthForm from '../Components/AuthForm'

const Landing = () => {
    const [showAuthForm, setShowAuthform] =  useState(false);
    const navigate = useNavigate();

    const handleGetStarted = ()=>{
        setShowAuthform(true);
    };

    const handleFormSubmit = (isValid) =>{
        if(isValid){
            setShowAuthform(false);
            navigate('/home');
        }
    };

    return (
        <div>
            <div
                className="absolute inset-0 -z-10 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
                style={{
                    backgroundImage: `url("https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg")`,
                    backgroundSize: "cover",
                    maskImage: "linear-gradient(to bottom, transparent, black)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
                }}
            >
            </div>
        
            <div className='flex gap-6 align-middle justify-center'>
                <div className='flex flex-col w-2/4 pl-6 gap-8 justify-center'>
                    <p className='font-medium text-3xl pb-4 text-blue-500 font-logowala'>BizBoost</p>
                    <p className='font-bold text-black-500 font-primary text-6xl'>Empower Your Vision, Elevate Your Business</p>
                    <p className='font-primary text-xl text-black-500'>Bizboost helps small entrepreneurs unlock growth opportunities with seamless support and resources tailored for success.</p>
                    <button className='h-10 w-fit px-8 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200'
                        onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>

                <img src={heroImg} alt="hero" className='scale-75'/> 
                
            </div>

            <AuthForm onFormSubmit={handleFormSubmit} isVisible={showAuthForm}/>
           
           <FooterFour />
        </div>

    )
}

export default Landing