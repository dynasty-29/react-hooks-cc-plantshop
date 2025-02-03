import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, toggleSoldOut }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut} />
    </main>
  );
}

export default PlantPage;
