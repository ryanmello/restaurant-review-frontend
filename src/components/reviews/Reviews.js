import React from "react";
import { useEffect, useState, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import "./Reviews.css";
import Star from "../media/Star.png";

const Reviews = ({ getRestaurantData, restaurant, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const restaurantId = params.id;

  useEffect(() => {
    getRestaurantData(restaurantId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      const response = await api.post("api/v1/reviews", {
        body: rev.value,
        id: restaurantId
      });

      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = "";
      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="reviews-container">
      <div className="left-reviews-container">
        <div className="reviews-image-container">
          <img className="reviews-image" src={restaurant?.image}></img>
        </div>
        <div className="restaurant-name">{restaurant?.name}</div>
        <div className="type-cost">
          <div className="restaurant-type">{restaurant?.type}</div>
          {"·"}
          <div className="restaurant-cost-container">
            <div className="restaurant-cost">{restaurant?.cost}</div>
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
          <div className="restaurant-address">{restaurant?.address}</div>
          {"·"}
          <div className="restaurant-phone">{restaurant?.phone}</div>
        </div>
        <div className="restaurant-description">{restaurant?.description}</div>
      </div>
      <div className="right-reviews-container">
        <h1>Write A Review :</h1>
        <h3>Tell us about your dining experience at {restaurant?.name}</h3>
        <div className="form-field">
            <div className="review-input-container">
                <textarea ref={revText} className="review-input"></textarea>
            </div>
            <div className="review-submit-button-container">
                <button type="button" className="review-submit-button" onClick={addReview}>Submit</button>
            </div>
        </div>
        <div className="previous-reviews">
            <h1>All Reviews :</h1>
            {reviews?.map((r) => {
                return (
                    <div className="review-body-container">
                        <div className="review-body">{r.body}</div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
