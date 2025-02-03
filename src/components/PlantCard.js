import React from "react";

function PlantCard({ plant, toggleSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button
        onClick={() => toggleSoldOut(plant.id)}
        className={plant.inStock ? "primary" : ""}
      >
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
