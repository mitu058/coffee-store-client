import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import logo from "../images/more/logo1.png";
import backgroundImage from "../images/more/13.jpg";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className=" py-10 mt-16 bg-cover bg-center"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-4">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Espresso Emporium" className="w-12 h-12" />
            <h2 className="text-2xl font-semibold ml-3 text-[#331A15]">Espresso Emporium</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Always ready to be your friend. Come & Contact with us to share your
            memorable <br /> moments, to share with your best companion.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          {/* Contact Info */}
          <div className="space-y-3">
            <h2 className="text-[#331A15] text-lg font-semibold">Get in Touch</h2>
            <p className="text-gray-600 flex items-center">
              <HiOutlinePhone className="mr-2" size={20} /> +86 01533 233 333
            </p>
            <p className="text-gray-600 flex items-center">
              <HiOutlineMail className="mr-2" size={20} /> info@gmail.com
            </p>
            <p className="text-gray-600 flex items-center">
              <HiOutlineLocationMarker className="mr-2" size={20} /> 72, Wall
              Street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#331A15]">Connect with Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-[#331A15] text-white rounded hover:bg-[#E3B577] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
