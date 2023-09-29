import "./App.css";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card"

import characters, { Rick } from "./data.js";

function App() {
  return (
    <>
      {/* Al componente SearchBar le pasamos por la prop "onSearch" una función */}
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />

      {/* Al componente Cards le pasamos por la prop "characters" el array de personajes que importamos más arriba */}
      <Cards characters={characters} />

      {/* Al componente Card le pasamos las props que corresponden a las propiedades de un personaje y una función "onClose" */}
      <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    </>
  );
}

export default App;
