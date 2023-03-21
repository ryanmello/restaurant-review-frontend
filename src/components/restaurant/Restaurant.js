import React from "react";
import "./Restaurant.css";
import Star from "../media/Star.png"

const Restaurant = ({ restaurants }) => {

  function handleClick(e) {
    console.log("clicked");
  }

  function viewWebsite(website){
    window.open(website, '_blank', 'noreferrer')
  }

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
                <div className="type-cost"> 
                  <div className="restaurant-type">{restaurant.type}</div>
                  {"·"}
                  <div className="restaurant-cost-container"> 
                    <div className="restaurant-cost">{restaurant.cost}</div>
                  </div>
                  {"·"}
                  <div className="star-container">
                    <img className="star" src={Star}></img>
                    <img className="star" src={Star}></img>
                    <img className="star" src={Star}></img>
                    <img className="star" src={Star}></img>
                    <img className="star" src={Star}></img>
                  </div>
                </div>
                <div className="address-phone"> 
                  <div className="restaurant-address">{restaurant.address}</div>
                  {"·"}
                  <div className="restaurant-phone">{restaurant.phone}</div>
                </div>
                <div className="restaurant-description">{restaurant.description}</div>
                <div className="button-container"> 
                  <div className="write-container"> 
                    <button className="write" onClick={handleClick}>
                      Write A Review
                    </button>
                  </div>
                  <div className="review-container"> 
                    <button className="review" onClick={handleClick}>
                      Read Reviews
                    </button>
                  </div>
                  <div className="website-container"> 
                    <button className="website" onClick={() => viewWebsite(restaurant.website)}>
                      Website
                    </button>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
