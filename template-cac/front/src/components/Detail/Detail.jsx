
import axios from 'axios' ;
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter ] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
        <div>
            { character ? (
            <div>
                <img src={character.image} style={{width:'300px', height:'400px'}}/>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         {/*<h2>{character.origin}</h2>*/}
            </div>
            ): <h1>Loding data</h1>}
        </div>
    )
};

export default Detail;
