import React from "react";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import Restaurant from "./components/restaurant/Restaurant";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [restaurants, setRestaurants] = useState();
  const [restaurant, setRestaurant] = useState();
  const [reviews, setReviews] = useState();

  const getRestaurants = async () => {
    try {
      const response = await api.get("/api/v1/restaurants");
      setRestaurants(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getRestaurantData = async (id) => {
    try {
      const response = await api.get(`/api/v1/restaurants/${id}`)
      const singleRestaurant = response.data;
      setRestaurant(singleRestaurant);
      setReviews(singleRestaurant.reviewIds);
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Restaurant restaurants={restaurants}/>}></Route>
          <Route path="/reviews/:id" element={<Reviews getRestaurantData={getRestaurantData} restaurant={restaurant} reviews={reviews} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
