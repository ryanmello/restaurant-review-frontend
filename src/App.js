import React from "react";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import Restaurant from "./components/restaurant/Restaurant";
import Home from "./components/home/Home";

function App() {
  const [restaurants, setRestaurants] = useState();
  const [restaurant, setRestaurant] = useState();

  const getRestaurants = async () => {
    try {
      const response = await api.get("/api/v1/restaurants");
      console.log(response.data);
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
      console.log(restaurant)
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
          <Route path="/" element={<Home restaurants={restaurants}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
