import React from "react";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="restaurant-container">
      {restaurants?.map((restaurant) => {
        return (
          <div className="restaurant-card-container">
            <div className="restaurant-card">
              <div className="restaurant-name">
                <h4>{restaurant.name}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
