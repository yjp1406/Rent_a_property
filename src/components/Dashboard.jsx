import React, { useState, useEffect } from "react";
import Card from "./ItemCard";
import Topbar from "./Topbar";
import Footer from "./Footer";

import { items } from "../Resources/items";
const Dashboard = () => {
  const [location, setLocation] = useState("All");
  const [when, setWhen] = useState("All");
  const [price, setPrice] = useState("All");
  const [propertyType, setPropertyType] = useState("All");

  useEffect(() => {
    console.log(price);
  }, [price]);

  const filteredItems = items
    .filter((item) => {
      if (location.anchorKey === "All" || location === "All") {
        return item;
      } else if (item.location === location.anchorKey) {
        return item;
      }
    })
    .filter((item) => {
      if (propertyType.anchorKey === "All" || propertyType === "All") {
        return item;
      } else if (item.pType === propertyType.anchorKey) {
        return item;
      }
    }).filter((item) => {
      if (price.anchorKey === "All" || price === "All") {
        return item;
      } else if (item.price <= parseInt(price.anchorKey.slice(5))) {
        return item;
      }
    });

  return (
    <div className="min-h-screen px-40 pt-10">
      <Topbar
        location={location}
        setLocation={setLocation}
        when={when}
        setWhen={setWhen}
        price={price}
        setPrice={setPrice}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
      />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            price={item.price}
            bed={item.bed}
            bath={item.bath}
            area={item.area}
            pType={item.pType}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
