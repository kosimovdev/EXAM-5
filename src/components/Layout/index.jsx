import "./style.scss";
import myPhoto from "../../assets/images/my-photo.jpg";
import {useContext} from "react";
import {Context} from "../../context/context.jsx";

const index = () => {

    const {isTheme,modeClass} = useContext(Context)
    console.log(modeClass)
    
  return (
    <section id='about' className={`about ${modeClass}`}>
        <div className="container ">
            <button className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] grid place-content-center mx-auto mb-[55px] duration-150 hover:bg-[#111827] hover:text-white'>About me</button>
           <div className="main-box flex justify-between items-start">
               <div className="box-left">
                   <div className='w-[280px] h-[320px] bg-[#E5E7EB] relative'>
                       <img className='w-[280px] h-[320px] absolute top-[-40px] right-[-35px] border-[8px] border-white' src={myPhoto} alt="my=photo"/>
                   </div>
               </div>
               <div className="box-right max-w-[584px]">
                   <h1 className='text-[30px] font-[Bold] mb-6'>Curious about me? Here you have it:</h1>
                   <p className='text-[16px] leading-[24px] text-[#4B5563] mt-2  mb-12'>
                       I'm a passionate, software engineer who specializes in full stack development (Vue.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                   </p>
                   <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using
                       modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                   <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                   <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Linked where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                   <p>Finally, some quick bits about me.</p>
                   <div className="flex">
                       <p>· B.E. in Computer Engineering </p>
                       <span>· Leadership</span></div>
                   <div className="flex">
                       <p>· Full time coding </p>
                       <span>· Project management</span>
                   </div>
                   <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
               </div>
           </div>
        </div>

    </section>
  );
};

export default index;
