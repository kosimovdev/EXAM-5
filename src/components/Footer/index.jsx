import './style.scss';
import {useContext} from "react";
import {Context} from "../../context/context.jsx";

const index = () => {
    const {modeClass , isTheme} = useContext(Context)
  return (
    <footer className={`footer ${modeClass}`}>
       <div className="container">
           <button className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] grid place-content-center mx-auto mb-[16px] duration-150 hover:bg-[#111827] hover:text-white'>Testimonials</button>
           <h1 className='max-w-[53%] mx-auto text-[20px] leading-[28px]  mb-12 text-center'>Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng birinchi hadisi shu hadis bilan boshlangan:
               “Innamal a’malu bin niyyati” ya’ni, “Barcha amallar niyatga bog’liq”.
           </h1>
           <div className="flex place-content-center items-center gap-5 mx-auto">
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               <a className='text-[36px] leading-[40px] font-[semi-bold]' href="https://mail.google.com/mail/u/0/#inbox">
                   kosimov.oyatillo@gmail.com
               </a>
               <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M32.6667 16.6665H19.3334C17.8607 16.6665 16.6667 17.8604 16.6667 19.3332V32.6665C16.6667 34.1393 17.8607 35.3332 19.3334 35.3332H32.6667C34.1395 35.3332 35.3334 34.1393 35.3334 32.6665V19.3332C35.3334 17.8604 34.1395 16.6665 32.6667 16.6665Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M11.3334 27.3332C9.86675 27.3332 8.66675 26.1332 8.66675 24.6665V11.3332C8.66675 9.8665 9.86675 8.6665 11.3334 8.6665H24.6667C26.1334 8.6665 27.3334 9.8665 27.3334 11.3332" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>

           </div>
           <div className="flex place-content-center items-center gap-5 mx-auto mt-5">
               <a href="tel:+99890767997">
                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
               </a>
               <a className='text-[36px] leading-[40px] font-[semi-bold]' href="tel:+998907679997">
                   +998 90 767 99 97
               </a>
               <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M32.6667 16.6665H19.3334C17.8607 16.6665 16.6667 17.8604 16.6667 19.3332V32.6665C16.6667 34.1393 17.8607 35.3332 19.3334 35.3332H32.6667C34.1395 35.3332 35.3334 34.1393 35.3334 32.6665V19.3332C35.3334 17.8604 34.1395 16.6665 32.6667 16.6665Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M11.3334 27.3332C9.86675 27.3332 8.66675 26.1332 8.66675 24.6665V11.3332C8.66675 9.8665 9.86675 8.6665 11.3334 8.6665H24.6667C26.1334 8.6665 27.3334 9.8665 27.3334 11.3332" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
           </div>
           <p className='text-center mt-12 text-[16px] leading-[24px] text-[#4B5563]'>You may also find me on these platforms!</p>
           <div className="flex place-content-center items-center mt-2 gap-2">
               <a href="https://github.com/">
                   <svg className='git' width="36" height="36" viewBox="0 0 36 36" fill="{isTheme === 'dark-mode' ? 'white' : '#4B5563'}" xmlns="http://www.w3.org/2000/svg">
                   <path d="M21 28V24C21.1392 22.7473 20.78 21.4901 20 20.5C23 20.5 26 18.5 26 15C26.08 13.75 25.73 12.52 25 11.5C25.28 10.35 25.28 9.15 25 8C25 8 24 8 22 9.5C19.36 9 16.64 9 14 9.5C12 8 11 8 11 8C10.7 9.15 10.7 10.35 11 11.5C10.2719 12.5159 9.91851 13.7528 10 15C10 18.5 13 20.5 16 20.5C15.61 20.99 15.32 21.55 15.15 22.15C14.98 22.75 14.93 23.38 15 24V28" stroke={isTheme ? '#FFFFFF' : '#4B5563'}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M15 24C10.49 26 10 22 8 22" stroke={isTheme === 'dark-mode' ? '#FFFFFF' : '#4B5563'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
               </a>
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
        <div className="flex bottom-box w-full h-[68px] mt-[96px] py-6">
            <h1 className='mx-auto'>© 2023 | Designed and coded with ❤️️ by NAJOT TA’LIM</h1>
        </div>
    </footer>
  );
};

export default index;