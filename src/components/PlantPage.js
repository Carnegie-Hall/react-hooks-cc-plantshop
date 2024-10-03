import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchWord, setSearchWord] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then(setPlants);
  }, []);

  function addNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
    body: JSON.stringify(newPlant)
  })
    .then(res => res.json())
    .then(plant => setPlants([...plants, plant]));
  }

  return (
    <main>
      <NewPlantForm handleSubmit={addNewPlant}/>
      <Search handleSearch={setSearchWord}/>
      <PlantList plants={plants.filter(plant => plant.name.includes(searchWord))} />
    </main>
  );
}

export default PlantPage;
