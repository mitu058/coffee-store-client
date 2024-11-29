import React from 'react';
import one from '../images/icons/1.png'
import two from '../images/icons/2.png'
import third from '../images/icons/3.png'
import fourth from '../images/icons/4.png'

const Header = () => {
    return (
        <div className='bg-[#ECEAE3] w-full'>
          
     <div className='grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4 gap-10  container mx-auto'>
        <div className='space-y-1'>
           <img src={one} alt="" />
           <h2 className='text-[#331A15] font-semibold text-lg'>Awesome Aroma</h2>
           <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
        <div className='space-y-1'>
           <img src={two} alt="" />
           <h2 className='text-[#331A15] font-semibold text-lg'>High Quality</h2>
           <p>We served the coffee to you maintaining the best quality</p>
            </div>
        <div className='space-y-1'>
           <img src={third} alt="" />
           <h2 className='text-[#331A15] font-semibold text-lg'>Pure Grades</h2>
           <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
        <div className='space-y-1'>
            <img src={fourth} alt="" />
            <h2 className='text-[#331A15] font-semibold text-lg'>Pure Grades</h2>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
     </div>

         
        </div>
    );
};

export default Header;