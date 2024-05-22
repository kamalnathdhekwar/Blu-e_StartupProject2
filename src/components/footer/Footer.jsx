import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Grid from './Grid';
import footerLogo from '../../assets/blueSymb.png'


export default function Footer() {
    return (
        <footer className=" border-y dark:bg-slate-950 bottom-0 mt-16 mx-4 " data-aos="fade-down" data-aos-duration="1000">
            
            <div className="flex flex-col ">
            <div className="   py-6 lg:py-8 text-black dark:text-slate-200">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    
            <div className="flex flex-col gap-5 justify-center md:max-w-[80%] mx-auto text-justify ">
                <img src={footerLogo} alt="" className='lg:w-24 md:w-12 w-12 shadow-md shadow-slate-200 '/>
                <Grid heading="About Blu-e"/>
                <p className="md:text-[20px] text-[14px]">
                <span className='font-bold md:text-[20px] text-[14px]'>Shashtav Charging Bharat Private Limited</span> is a MSME registered and Startup India recognized startup by two young Indian entrepreneurs with a brand name as BLU-E. 
                </p>
                <h1 claclassNamess="">CIN: U27900MH2023PTC401951</h1>
                </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6  ml-8">
                        
                        <Grid heading="Company" list1="Home" list2="Service" list3="About Us " list4="FAQs"/>
                        <Grid heading="products" list1="Home" list2="Service" list3="About Us " list4="FAQs"/>
                        <Grid heading="contact"/>
                         
           </div>

                

           </div>
            </div>
            
            {/* horizontal line */}
           <div className="w-full h-[2px] bg-black dark:bg-slate-300"></div>


            <div  className="md:flex-row flex flex-col justify-between  md:items-end  items-center mt-4 md:gap-0 gap-4 text-slate-800 dark:text-slate-200 mb-6 md:mx-16 ">
                <div className="">
                 <p className="font-bold">Privacy Policy | Terms & Conditions</p>
                 <p className="text-sm mt-2">© 2023 Shashtav Charging Bharat Pvt. Ltd.</p>
                </div>
                <div className='flex gap-6'>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='md:w-9 md:h-9 w-7 h-7 text-white dark:text-black dark:bg-slate-200 bg-blue-900 p-1 rounded-lg '/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='md:w-9 md:h-9 w-7 h-7  text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200'/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='md:w-9 md:h-9 w-7 h-7 text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200'/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='md:w-9 md:h-9 w-7 h-7 text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200'/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className='md:w-9 md:h-9 w-7 h-7 text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200'/>
                    </a>
</div>

            </div>

            </div>

            
        </footer>
    );
}