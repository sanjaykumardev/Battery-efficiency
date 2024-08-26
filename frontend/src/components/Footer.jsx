/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-blue-500 px-12 py-12 md:px-15 md:py-16 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-4 text-lg text-white md:text-xl">
          <h1 className="text-2xl font-bold mb-4">Customer Service</h1>
          <p>Feature Blogs</p>
          <p>Most Viewed</p>
          <p>Demo</p>
          <p>Instagram</p>
      
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4 text-lg text-white md:text-xl">
          <h1 className="text-2xl font-bold mb-4">Support</h1>
          <p>Forum</p>
          <p>Support</p>
          <p>Logistic Support</p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 text-lg text-white md:text-xl">
          <h1 className="text-2xl font-bold mb-4">Company</h1>
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <div className="bg-black py-4">
        <p className="text-center text-white text-sm md:text-base">
          All rights reserved @demo 2024
        </p>
      </div>
    </>
  );
};

export default Footer;
