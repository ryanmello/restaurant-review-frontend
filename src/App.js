import React from "react";
import api from "./api/axiosConfig"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import Layout from "./components/Layout";

function App() {

  const [restaurants, setRestaurants] = useState();

  const getRestaurants = async () => {
    try {
      const response = await api.get("/api/v1/restaurants")
      setRestaurants(response.data)
      console.log(restaurants);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRestaurants();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
