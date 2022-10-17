import React from "react";
import { Card } from "@nextui-org/react";
import image1 from "../assets/images/House1.jpg";
import image2 from "../assets/images/image2.jpg";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";


const ItemCard = (props) => {
  // const logo = require((props.image).toLowerCase());
  // console.log(logo);

  return (
    <div className="min-h-[10rem]">
      <Card isPressable borderWeight="none" isHoverable>
        <div>
          <img src={props.image} alt="" />
          {/* <img src={require("public/images/House1.jpg")} alt="hel"/> */}
        </div>
        <div className="p-5">
          <h4 className="text-primary tracking-normal m-0">
            ${props.price} <span className="text-sm text-gray">/ month</span>
          </h4>
          <h3 className="m-0">{props.title}</h3>
          <p className="m-0 text-sm text-gray tracking-normal">
            {props.location} <span className="mx-2">|</span> <span className="text-primary text-lg font-semibold"> {props.pType} </span>
          </p>
          {/* <br /> */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBed className="card-bottom" /> {props.bed} Beds
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="card-bottom" /> {props.bath} Baths
            </div>
            <div className="flex items-center gap-2">
              <BiArea className="card-bottom" /> {props.area} sqft
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
