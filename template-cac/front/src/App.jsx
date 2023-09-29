import "./App.css";
import Nav from "./components/Nav/Nav";
import {useState} from "react";
import Cards from "./components/Cards/Cards";


function App() {
  const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 };

  const [characters, setCharacters] = useState ([]);
  const onSearch = () =>{
    setCharacters([...characters, example]);
  }
  return (
    <>
      <Nav onSearch={onSearch}/>     
      <Cards characters={characters}/>

    </>
  );
}
export default App;
