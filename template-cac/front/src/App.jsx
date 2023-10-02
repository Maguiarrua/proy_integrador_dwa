import "./App.css";
import Nav from "./components/Nav/Nav";
import {useState} from "react";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import PATHROUTES from "./helpers/PathRoutes.helpers";
import Form from "./components/Form/Form";


function App() {
  const {pathname} = useLocation ();
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
      {pathname !== "/" && <Nav onSearch={onSearch}/>}   
      <Routes>
      <Route path={PATHROUTES.LOGIN} element={<Form/>}/>
      <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path={PATHROUTES.ABOUT} element={<About/>}/>
      <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>     
      </Routes>


    </>
  );
}
export default App;
