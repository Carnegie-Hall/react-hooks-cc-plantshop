import React, { useState }from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true);
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

// I need to use a get fetch request to get the data from the db.json and map all of them to the page in the ul cards area.
// I need to create a post request that adds plants from the submit area to the ul area using the add plant button
// I need to be able to add a button that shows the text in stock but will toggle and show sold out with a click event that changes state
// I need a function that will filter the list of plants and change the state of the listed items on the page

export default PlantCard;
