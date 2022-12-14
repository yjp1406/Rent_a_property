import React, { useState, useContext } from "react";
import { Textarea, Checkbox, Button, Dropdown } from "@nextui-org/react";

const Topbar = ({
  location,
  setLocation,
  when,
  setWhen,
  price,
  setPrice,
  propertyType,
  setPropertyType,
}) => {

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="">Search properties to rent</h2>
        <div className="flex justify-center items-center">
          <h3>Search Box</h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 w-full bg-white h-[5rem] my-5 px-10 rounded-lg">
        <div className="space-y-[-0.5rem]">
          <h6 className="text-gray">Location</h6>
          <Dropdown DropdownVariants="shadow">
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{location}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={location}
              onSelectionChange={(key) => setLocation(key)}
            >
              <Dropdown.Item key="Mumbai, India">Mumbai, India</Dropdown.Item>
              <Dropdown.Item key="Delhi, India">Delhi, India</Dropdown.Item>
              <Dropdown.Item key="Gujarat, India">Gujarat, India</Dropdown.Item>
              <Dropdown.Item key="All">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6 className="text-gray">When</h6>
          <Dropdown>
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{when}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={when}
              onSelectionChange={(key) => setWhen(key)}
            >
              <Dropdown.Item key="Move-in">
                Move-in
              </Dropdown.Item>
              <Dropdown.Item key="Move-in">
                Move-in
              </Dropdown.Item>
              <Dropdown.Item key="Move-in">
                Move-in
              </Dropdown.Item>
              <Dropdown.Item key="All">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6 className="text-gray">Price</h6>
          <Dropdown>
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{price}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={price}
              onSelectionChange={(key) => setPrice(key)}
            >
              <Dropdown.Item key="till 1000"> less than or equal 1000</Dropdown.Item>
              <Dropdown.Item key="till 1500">less than or equal 1500</Dropdown.Item>
              <Dropdown.Item key="till 2000">less than or equal 2000</Dropdown.Item>
              <Dropdown.Item key="till 2500">less than or equal 2500</Dropdown.Item>
              <Dropdown.Item key="till 3000">less than or equal 3000</Dropdown.Item>
              <Dropdown.Item key="till 5000">less than or equal 5000</Dropdown.Item>
              <Dropdown.Item key="All">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6 className="text-gray">Property Type</h6>
          <Dropdown>
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{propertyType}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={propertyType}
              onSelectionChange={(key) => setPropertyType(key)}
            >
              <Dropdown.Item key="Houses">Houses</Dropdown.Item>
              <Dropdown.Item key="Apartment">Apartment</Dropdown.Item>
              <Dropdown.Item key="All">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <Button className="!bg-primary" auto>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
