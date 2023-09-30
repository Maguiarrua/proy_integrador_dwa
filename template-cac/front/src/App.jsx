import "./App.css";
import Nav from "./components/Nav/Nav";
import {useState} from "react";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import PATHROUTES from "./helpers/PathRoutes.helpers";


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
      <Routes>
        <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path={PATHROUTES.ABOUT} element={<About/>}/>
      <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>      
      </Routes>
      

    </>
  );
}
export default App;
