// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./Components/CharacterCard";
// import { isCompositeComponent } from "react-dom/test-utils";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=7")
      .then((response) => {
        // console.log(response.data.results);
        setCharacters(response.data.results);
      });
  }, []);
  // console.log(characters);
  // console.log(characters[0]["image"]);
  const displayCharacters = characters
    .filter((elem, ind) => ind < 20)
    .map((item, index) => {
      return (
        <div key={item.id}>
          {/* <h2>{index + 1}</h2> */}
          <CharacterCard
            url={item.image}
            name={item.name}
            location={item.location.name}
          />
        </div>
      );
    });

  console.log(displayCharacters);

  return (
    <div className="App">
      <h1>CHARACTERS</h1>
      <nav className="card-grid">{displayCharacters}</nav>
    </div>
  );
}

export default App;
