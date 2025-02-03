import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, []);

  const addPlant = (newPlant) => setPlants((prevPlants) => [...prevPlants, newPlant]);

  function toggleSoldOut(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  };

  return (
    <div className="app">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PlantPage plants={plants} addPlant={addPlant} toggleSoldOut={toggleSoldOut} />
      )}
    </div>
  );
}

export default App;
