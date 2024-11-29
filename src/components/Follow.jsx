import React from 'react';
import one from '../images/cups/Rectangle 9.png'
import two from '../images/cups/Rectangle 10.png'
import three from '../images/cups/Rectangle 11.png'
import four from '../images/cups/Rectangle 12.png'
import five from '../images/cups/Rectangle 13.png'
import six from '../images/cups/Rectangle 14.png'
import seven from '../images/cups/Rectangle 15.png'
import eight from '../images/cups/Rectangle 16.png'

const Follow = () => {
    return (
        <div>
        <h2 className='text-3xl font-bold text-[#331A15] text-center pb-6'>Follow us on Instagram</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[80%] mx-auto'>
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
        </div>
        </div>
    );
};

export default Follow;