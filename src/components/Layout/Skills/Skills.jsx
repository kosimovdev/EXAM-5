import './style.scss'
import data from "../../../db.jsx";
import {useContext} from "react";
import {Context} from "../../../context/context.jsx";
const Skills = () => {
    const {skills} = data

    const {modeClass,isTheme} = useContext(Context)
    return (
           <section id='skills' className={`skills ${modeClass}`}>
               <div className="container">
                   <button className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] grid place-content-center mx-auto'>Skills</button>
                   <h1 className='text-[20px] leading-[28px] mt-4 mb-12 text-center'>The skills, tools and technologies I am really good at:</h1>
                   <div className="main-box grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-[48px] items-center">
                       {
                           skills.map((el,index)=> {
                               return(
                                   <ul key={index} className='gap-x-2'>
                                       <li>
                                          <div className='w-full'> {isTheme ? <img className='mx-auto' src={el.image} alt="img"/> : <img className='mx-auto' src={el.image2} alt="img"/>}</div>
                                         <p className='mt-2 text-center'>{el.title}</p>
                                       </li>
                                   </ul>
                               )
                           })

                       }
                   </div>
               </div>
           </section>
    );
};

export default Skills;