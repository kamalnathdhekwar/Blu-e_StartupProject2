import React from 'react'

const ServiceSolutioncard = ({image,title}) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className='lg:w-[202px] lg:h-[380px] flex flex-col justify-center items-center gap-3 '> 
        <div  className="lg:w-[163px] lg:h-[190px] md:w-[140px] md:h-[170px] w-[90px] h-[110px] bg-yellow-400/50 dark:bg-yellow-300/85 items-center justify-center flex  rounded-full shadow-black shadow-lg hover:scale-110 cursor-pointer  duration-500">
          <img data-aos="fade-down" data-aos-duration="1000"  src={image} alt="" className="m-auto lg:size-24 md:size-16 size-12 " />
        </div>

        <div className="">
            <h1 data-aos="fade-up" data-aos-duration="1000"  className="text-center lg:text-[23px] font-bold text-indigo-900 dark:text-indigo-400/80 md:text-[20px] text-[17px]">{title}</h1>
        </div>
    </div>
  )
}

export default ServiceSolutioncard