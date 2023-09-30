import "./App.css";
import Nav from "./components/Nav/Nav";
import {useState} from "react";
import Cards from "./components/Cards/Cards";
import axios from "axios";

function App() {

  const [characters, setCharacters] = useState ([]);
  
  const  onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }
 const onClose = (id) => {
  setCharacters(
    characters.filter((char)=>{
      return char.id !== Number(id);
    })
    );
};

  return (
    <>
      <Nav onSearch={onSearch}/>     
      <Cards characters={characters} onClose={onClose}/>

    </>
  );
}
export default App;
