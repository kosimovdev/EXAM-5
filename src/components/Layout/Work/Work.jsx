import './style.scss';
import data from "../../../db.jsx";
import myWork1 from '../../../assets/images/my-work-1.png'
import myWork2 from '../../../assets/images/my-work-2.png'
import myWork3 from '../../../assets/images/my-work-3.png'
import {useContext} from "react";
import {Context} from "../../../context/context.jsx";

const Work = () => {
     const {modeClass} = useContext(Context)
    const {workSkills} = data
    return (
        <section className={`work ${modeClass}`}>
          <div className="container">
              <button className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] grid place-content-center mx-auto mb-3'>Work</button>
              <h1 className='text-[20px] leading-[28px]  mb-12 text-center'>Some of the noteworthy projects I have built:</h1>
              <div className="main-box ">
                  <div className="card-1 flex-col lg:flex justify-between items-start mb-12 hover:shadow-md duration-150 rounded-[12px] ">
                        <div className="box-left bg-[#F9FAFB] p-12 w-full  max-w-[576px]">
                            <a href="https://e-book-one.vercel.app/">
                                <img className='w-full max-w-[480px] h-[320px] rounded-[12px] shadow-md mx-auto' src={myWork1} alt="img"/>
                            </a>
                        </div>
                        <div className="box-right p-8 lg:p-12 w-full lg:max-w-[576px]">
                            <h1 className='text-[20px] leading-[28px] font-[semi-bold] mb-6'>E-Book</h1>
                            <p className='text-[16px] leading-[24px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-2 tech">
                                {workSkills.map((el,index)=> {
                                    return(
                                        <ul key={index} >
                                            <li className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] text-center'>{el.title}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <a href="https://e-book-one.vercel.app/">
                                <i className='bx bx-link-external mt-6 text-[30px] text-[#4B5563]'></i>
                            </a>
                        </div>
                    </div>
                  <div className="card-2 flex-col-reverse lg:flex items-start mb-12 hover:shadow-md duration-150 rounded-[12px]">
                      <div className="box-left p-8 lg:p-12 w-full lg:max-w-[576px]">
                          <h1 className='text-[20px] leading-[28px] font-[semi-bold] mb-6'>Teletype-Clone</h1>
                          <p className='text-[16px] leading-[24px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-2 tech">
                              {workSkills.map((el,index)=> {
                                  return(
                                      <ul key={index} >
                                          <li className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] text-center'>{el.title}</li>
                                      </ul>
                                  )
                              })}
                          </div>
                          <a href="https://teletype-clone-8zz4.vercel.app/">
                              <i className='bx bx-link-external mt-6 text-[30px] text-[#4B5563]'></i>
                          </a>
                      </div>
                      <div className="box-right bg-[#F9FAFB] p-12 w-full lg:max-w-[576px]">
                          <a href="https://teletype-clone-8zz4.vercel.app/">
                              <img className='w-full max-w-[480px] h-[320px] rounded-[12px] shadow-md mx-auto' src={myWork2} alt="img"/>
                          </a>
                      </div>
                  </div>
                  <div className="card-3 flex-col lg:flex lg:justify-between items-start hover:shadow-md duration-150 rounded-[12px]">
                      <div className="box-left bg-[#F9FAFB] p-8 lg:p-12 w-full lg:max-w-[576px]">
                          <a href="https://lawyer-exam-project.vercel.app/">
                              <img className='w-full max-w-[480px] h-[320px] rounded-[12px] shadow-md mx-auto' src={myWork3} alt="img"/>
                          </a>
                      </div>
                      <div className="box-right p-12">
                          <h1 className='text-[20px] leading-[28px] font-[semi-bold] mb-6'>1000-Lawyers project</h1>
                          <p className='text-[16px] leading-[24px] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-2 tech">
                              {workSkills.map((el,index)=> {
                                  return(
                                      <ul key={index} >
                                          <li className='py-1 px-5 bg-[#E5E7EB] rounded-[12px] text-center'>{el.title}</li>
                                      </ul>
                                  )
                              })}
                          </div>
                          <a href="https://lawyer-exam-project.vercel.app/">
                              <i className='bx bx-link-external mt-6 text-[30px] text-[#4B5563]'></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default Work;