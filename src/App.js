import api from "./api/axiosConfig"
import { useState, useEffect } from "react";

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
      <header className="App-header">
        Restaurant Review
      </header>
    </div>
  );
}

export default App;
