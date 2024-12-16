import { useState, useEffect } from "react";
import { getAllStarships } from "/services/sw-api";
import "./App.css";
import StarshipCard from "./components/StarshipCard";

function App() {
  // data is the list of starships fetched from the API.
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const json = await getAllStarships();
      setData(json.results); // set data
    };

    fetchStarships();
  }, []);

  return (
    <>
      <ul>
        {data.map((starship, index) => {
          return <StarshipCard key={index} name={starship.name} />;
        })}
      </ul>
    </>
  );
}

export default App;
