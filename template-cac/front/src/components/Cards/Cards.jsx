import Card from "../Card/Card";
import style from './Cards.module.css';

const Cards = (props) => {
  const {characters} = props;
  return (

      <div className={style.wrapperCards}>{characters.map((char) =>{
        return(
          <Card
            key={char.id}
            name={char.name}
            species={char.species}
            status={char.status}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={() => {window.alert('Se cerro el personaje')}}
          />
        )
      } )}</div>

  );
};

export default Cards;
