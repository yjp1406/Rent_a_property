import React from "react";
import { HiHome } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="flex bg-white -mx-40 min-h-[20rem] px-80 py-5">
      <div className="w-2/12 text-primary flex text-2xl gap-2">
        <div className=" align-top flex gap-2 select-none">
          <HiHome className="mt-1" /> <span className="flex"> Real-e </span>
        </div>
      </div>
      <div className="flex justify-between w-10/12">
        <div>
          <h4 className="uppercase font-bold">Home for sell</h4>
          <h6 className="text-gray">Information</h6>
          <h6 className="text-gray">Reviews</h6>
          <h6 className="text-gray">Pricing</h6>
          
          <h4 className="uppercase font-bold">Buy a Home</h4>
          <h6 className="text-gray">Buy</h6>
          <h6 className="text-gray">Finance</h6>
        </div>
        <div>
          <h4 className="uppercase font-bold">Buy, Rent and Sell</h4>
          <h6 className="text-gray">Buy and sell properties</h6>
          <h6 className="text-gray">Rent home</h6>
          <h6 className="text-gray">Builder trade-up</h6>
          <h4 className="uppercase font-bold">Terms & Privacy</h4>
          <h6 className="text-gray">Trust & Safety</h6>
          <h6 className="text-gray">Terms of Services</h6>
        </div>
        <div>
          <h4 className="uppercase font-bold">About</h4>
          <h6 className="text-gray">Contact</h6>
          <h6 className="text-gray">Company </h6>
          <h4 className="uppercase font-bold">Resources</h4>
          <h6 className="text-gray">Guides</h6>
          <h6 className="text-gray">Help Center</h6>
          <h6 className="text-gray">FAQ</h6>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
