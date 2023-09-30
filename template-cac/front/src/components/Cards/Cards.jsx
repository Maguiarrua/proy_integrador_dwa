import Card from "../Card/Card";
import style from './Cards.module.css';

const Cards = (props) => {
  const {characters, onClose} = props;
  return (

      <div className={style.wrapperCards}>{characters.map((char) =>{
        return(
          <Card
            id = {char.id}
            key={char.id}
            name={char.name}
            species={char.species}
            status={char.status}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        )
      } )}</div>

  );
};

export default Cards;
