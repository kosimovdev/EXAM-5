import './style.scss'
import uzum from '../../../assets/images/uzum.svg'
import najot from '../../../assets/images/najot.svg'
import itransition from '../../../assets/images/itransition.svg'
import {useContext} from "react";
import {Context} from "../../../context/context.jsx";
const Experience = () => {

    const {modeClass} = useContext(Context)


    return (
        <section className={`experience ${modeClass}`}>
          <div className='container'>
              <button className='py-1 px-5 text-[14px] bg-[#E5E7EB] rounded-[12px] grid place-content-center mx-auto'>Experience</button>
              <h1 className='text-[20px] leading-[28px] text-center mt-4 mb-12'>Here is a quick summary of my most recent experiences:</h1>
              <div className="main-box">
                  <div className="child-box max-w-[896px] min-h-[288px] bg-white p-[32px] rounded-[12px] mx-auto mb-12 hover:shadow-md duration-150">
                     <div className="flex justify-between items-center">
                         <img src={uzum} alt="uzum"/>
                         <h1 className='text-[20px]'>Team Lead (Senior Software engineer)</h1>
                         <p className='text-16px]'>May 2023 - Present</p>
                     </div>
                      <ul className='grid place-content-center mx-auto mt-4 gap-y-1 text-[16px]'>
                          <li>&middot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                          <li>&middot; Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                          <li>&middot; Sed quis justo ac magna.</li>
                          <li>&middot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      </ul>

                  </div>
                  <div className="child-box max-w-[896px] h-[288px] bg-white p-[32px] mx-auto mb-12 rounded-[12px] hover:shadow-md duration-150">
                     <div className="flex justify-between items-center">
                         <img src={najot} alt="najot"/>
                         <h1 className='text-[20px]'>Head Teacher & Tech Interviewer</h1>
                         <p className='text-16px]'>May 2023 - Present</p>
                     </div>
                      <ul className='grid place-content-center mx-auto mt-4 gap-y-1 text-[16px]'>
                          <li>&middot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                          <li>&middot; Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                          <li>&middot; Sed quis justo ac magna.</li>
                          <li>&middot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      </ul>

                  </div>
                  <div className="child-box max-w-[896px] h-[288px] bg-white p-[32px] mx-auto mb-12 rounded-[12px] hover:shadow-md duration-150">
                     <div className="flex justify-between items-center">
                         <img src={itransition} alt="itransition"/>
                         <h1 className='text-[20px]'>Senior Software engineer</h1>
                         <p className='text-16px]'>Jul 2021 - 2022 Oct</p>
                     </div>
                      <ul className='grid place-content-center mx-auto mt-4 gap-y-1 text-[16px]'>
                          <li>&middot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                          <li>&middot; Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                          <li>&middot; Sed quis justo ac magna.</li>
                          <li>&middot; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      </ul>

                  </div>
              </div>
          </div>
        </section>
    );
};

export default Experience;