import './style.scss';
import data from "../../../db.jsx";
import {useContext} from "react";
import {Context} from "../../../context/context.jsx";

const Comment = () => {
    const {comments} = data
    const {modeClass} = useContext(Context)
    return (
        <section id='comments' className={`comments ${modeClass}`}>
          <div className="container">
              <button className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] grid place-content-center mx-auto mb-[16px] duration-150 hover:bg-[#111827] hover:text-white'>Testimonials</button>
              <h1 className='text-[20px] leading-[28px]  mb-12 text-center'>Nice things people have said about me:</h1>
              <div className="main-box flex justify-between items-center gap-12">
                  {comments.map((el,index) => {
                      return(
                          <div className="card bg-white rounded-[12px] p-12 max-w-[375px] h-[100%] h-[420px]" key={index}>
                              <img className='rounded-full grid place-content-center mx-auto mb-6' src={el.image} alt="img"/>
                              <p className='text-[16px] leading-[24px] mb-6'>{el.title}</p>
                              <h1 className='text-[20px] leading-[28px] font-[semi-bold] mb-4'>{el.name}</h1>
                              <p>{el.company}</p>
                          </div>
                      )
                  })}
              </div>
          </div>
        </section>
    );
};

export default Comment;