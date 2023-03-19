import React from "react";
import "./Restaurant.css";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="restaurant-container">
      {restaurants?.map((restaurant) => {
        return (
          <div className="restaurant-card-container">
            <div className="restaurant-card">
              <div className="restaurant-image-container">
                <img className="restaurant-image" src={restaurant.image}></img>
              </div>
              <div className="restaurant-information">
                <div className="restaurant-name">{restaurant.name}</div>
                <div className="restaurant-type">{restaurant.type}</div>
                <div className="restaurant-address">{restaurant.address}</div>
                <div className="restaurant-cost">{restaurant.cost}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
