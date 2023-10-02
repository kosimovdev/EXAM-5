import "./style.scss";
import {useContext, useState} from "react";
import Location from '../../assets/images/location.svg'
import myPhoto from '../../assets/images/my-photo.jpg'
import dot from '../../assets/images/dot.svg'
import {Context} from "../../context/context.jsx";
const index = () => {
    const {isMobile,toggle,toggleTheme,isTheme,modeClass} = useContext(Context)


  return (
   <main className={`${modeClass}`}>
       <header  className='w-full fixed top-0 left-0 bg-white z-50'>
           <nav className='py-4'>
               <div className="container flex items-center justify-between">
                   {isMobile ? <span></span> : <a href='#header' className='text-[30px] leading-[36px] font-[Bold]'>&lt;OK/&gt;</a>}

                   <ul className={`flex justify-between items-center gap-x-6 ${modeClass}`}>
                       <li>
                           <a className={`hoverLink ${modeClass}`} href="#about">
                               About
                           </a></li>
                       <li>
                           <a className='hoverLink' href="#work">
                               Work
                           </a></li>
                       <li>
                           <a className='hoverLink' href="#comments">
                               Testimonials
                           </a></li>
                       <li>
                           <a className='hoverLink' href="#contact">
                               Contact
                           </a></li>
                       <li className='border-l-[1px] border-[#F3F4F6] pl-6 flex items-center '>
                           {
                               isTheme === 'dark-mode' ? <i onClick={toggleTheme} className='bx bx-sun text-[24px] mr-6 text-black cursor-pointer' ></i> :  <i onClick={toggleTheme} className='bx bxs-moon text-[24px] mr-6 cursor-pointer'></i>
                           }
                           <button className='py-[6px] px-[16px] bg-[#111827] rounded-[12px] text-white'>Download CV</button>
                       </li>

                   </ul>
                   <div className="flex md:hidden">
                       <div className="block lg:hidden">
                           {
                               isTheme === 'dark-mode' ? <i onClick={toggleTheme} className='bx bx-sun text-[24px] mr-6 cursor-pointer' ></i> :  <i onClick={toggleTheme} className='bx bxs-moon text-[24px] mr-6 cursor-pointer'></i>
                           }
                       </div>
                       <div onClick={toggle} className='flex lg:hidden hamburger'>

                           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M4 12H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M4 6H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M4 18H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                       </div>
                   </div>
                   {
                       isMobile ?
                           <>
                               <div className="absolute h-screen hidden top-0 right-0  mobile-res z-40 duration-150 pb-2">
                                   <h1 className='text-[30px] mt-4 ml-4 leading-[36px] font-[Bold]'>&lt;OK/&gt;</h1>
                                   <i onClick={toggle} className='bx bx-x text-[40px] absolute right-[16px] top-[16px]'></i>
                                   <ul className='mobile-info pt-[56px] p-4 border-t-[1px] border-[#F3F4F6]'>
                                       <li className='mb-4'>
                                           <a onClick={toggle} className='hoverLink' href="#about">
                                               About
                                           </a></li>
                                       <li className='mb-4'>
                                           <a onClick={toggle} className='hoverLink' href="#work">
                                               Work
                                           </a></li>
                                       <li className='mb-4'>
                                           <a onClick={toggle} className='hoverLink' href="#comments">
                                               Testimonials
                                           </a></li>
                                       <li className='mb-4'>
                                           <a onClick={toggle} className='hoverLink' href="#contact">
                                               Contact
                                           </a></li>
                                   </ul>
                                   <div className='border-t-[1px] border-[#F3F4F6] px-4 pt-4 block mobile-btn'>
                                       <div className='flex justify-between items-center text-[16px] mt-4'>
                                           <p>Switch Theme</p>
                                           {
                                               isTheme === 'dark-mode' ? <i onClick={toggleTheme} className='bx bx-sun text-[24px] mr-6 text-black cursor-pointer' ></i> :  <i onClick={toggleTheme} className='bx bxs-moon text-[24px] mr-6 cursor-pointer'></i>
                                           }
                                       </div>
                                       <button className='w-full py-[6px] px-[16px] bg-[#111827] rounded-[12px] text-white mt-4'>Download CV</button>
                                   </div>
                               </div>
                               <div onClick={toggle} className="absolute h-screen top-0 left-0 w-full bgBlur z-30">
                               </div>
                           </> : ""
                   }
               </div>
           </nav>
       </header>
       <section id='header' className='py-[96px]'>
           <div className="container flex justify-between items-center">
               <div className="box-left">
                   <h1 className='text-[60px] font-[Bold]'>Hi,I'm Oyatullo 👋</h1>
                   <p className='text-[16px] leading-[24px] text-[#4B5563] mt-2 max-w-[68%] mb-12'>I'm a front-end developer (React.js & and TypeScript ) with a focus on creating  exceptional digital
                       experiences that are fast, accessible, visually appealing,
                       and responsive. Even though I have been creating web applications
                       for over 1 years, I still love it as if it was something new.</p>
                   <address className='flex items-center font-[Regular] text-[16p] mb-2'><img className='mr-2' src={Location} alt="img"/>Tashkent, Chilonozor</address>
                   <div className='flex items-center gap-2 mt-2 mb-12'>
                       <img src={dot} alt="img"/>
                       <p>Available for new projects</p>
                   </div>

                   <div className="flex items-center gap-2">
                       <a href="https://github.com/"> <svg className='git' width="36" height="36" viewBox="0 0 36 36" fill={isTheme === 'dark-mode' ? 'white' : 'black'} xmlns="http://www.w3.org/2000/svg">
                           <path d="M21 28V24C21.1392 22.7473 20.78 21.4901 20 20.5C23 20.5 26 18.5 26 15C26.08 13.75 25.73 12.52 25 11.5C25.28 10.35 25.28 9.15 25 8C25 8 24 8 22 9.5C19.36 9 16.64 9 14 9.5C12 8 11 8 11 8C10.7 9.15 10.7 10.35 11 11.5C10.2719 12.5159 9.91851 13.7528 10 15C10 18.5 13 20.5 16 20.5C15.61 20.99 15.32 21.55 15.15 22.15C14.98 22.75 14.93 23.38 15 24V28" stroke={isTheme ? '#FFFFFF' : '#4B5563'}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M15 24C10.49 26 10 22 8 22" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg></a>
                       <a href="https://twitter.com/">
                           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M28 10C28 10 27.3 12.1 26 13.4C27.6 23.4 16.6 30.7 8 25C10.2 25.1 12.4 24.4 14 23C9 21.5 6.5 15.6 9 11C11.2 13.6 14.6 15.1 18 15C17.1 10.8 22 8.4 25 11.2C26.1 11.2 28 10 28 10Z" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                       </a>
                       <a href="https://figma.com">
                           <svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M11 11.5C11 10.5717 11.3687 9.6815 12.0251 9.02513C12.6815 8.36875 13.5717 8 14.5 8H18V15H14.5C13.5717 15 12.6815 14.6313 12.0251 13.9749C11.3687 13.3185 11 12.4283 11 11.5Z" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M18 8H21.5C21.9596 8 22.4148 8.09053 22.8394 8.26642C23.264 8.44231 23.6499 8.70012 23.9749 9.02513C24.2999 9.35013 24.5577 9.73597 24.7336 10.1606C24.9095 10.5852 25 11.0404 25 11.5C25 11.9596 24.9095 12.4148 24.7336 12.8394C24.5577 13.264 24.2999 13.6499 23.9749 13.9749C23.6499 14.2999 23.264 14.5577 22.8394 14.7336C22.4148 14.9095 21.9596 15 21.5 15H18V8Z" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M18 18.5C18 18.0404 18.0905 17.5852 18.2664 17.1606C18.4423 16.736 18.7001 16.3501 19.0251 16.0251C19.3501 15.7001 19.736 15.4423 20.1606 15.2664C20.5852 15.0905 21.0404 15 21.5 15C21.9596 15 22.4148 15.0905 22.8394 15.2664C23.264 15.4423 23.6499 15.7001 23.9749 16.0251C24.2999 16.3501 24.5577 16.736 24.7336 17.1606C24.9095 17.5852 25 18.0404 25 18.5C25 18.9596 24.9095 19.4148 24.7336 19.8394C24.5577 20.264 24.2999 20.6499 23.9749 20.9749C23.6499 21.2999 23.264 21.5577 22.8394 21.7336C22.4148 21.9095 21.9596 22 21.5 22C21.0404 22 20.5852 21.9095 20.1606 21.7336C19.736 21.5577 19.3501 21.2999 19.0251 20.9749C18.7001 20.6499 18.4423 20.264 18.2664 19.8394C18.0905 19.4148 18 18.9596 18 18.5Z" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M11 25.5C11 24.5717 11.3687 23.6815 12.0251 23.0251C12.6815 22.3687 13.5717 22 14.5 22H18V25.5C18 26.4283 17.6313 27.3185 16.9749 27.9749C16.3185 28.6313 15.4283 29 14.5 29C13.5717 29 12.6815 28.6313 12.0251 27.9749C11.3687 27.3185 11 26.4283 11 25.5Z" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M11 18.5C11 17.5717 11.3687 16.6815 12.0251 16.0251C12.6815 15.3687 13.5717 15 14.5 15H18V22H14.5C13.5717 22 12.6815 21.6313 12.0251 20.9749C11.3687 20.3185 11 19.4283 11 18.5Z" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                       </a>

                   </div>
               </div>
               <div className="box-right">
                   <div className='w-[280px] h-[320px] bg-[#E5E7EB] relative'>
                       <img className='w-[280px] h-[320px] absolute top-[-40px] right-[35px] border-[8px] border-white' src={myPhoto} alt="my=photo"/>

                   </div>
               </div>
           </div>
       </section>
   </main>
  );
};

export default index;
