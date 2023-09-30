// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres
import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = (props) => {
  const { id, name, species, status, gender, origin,  image, onClose } = props;
  return (
    
    <div className={style.CardContainer}>
      <div className={style.header_card}>
        <div className={style.wrapperButton}>
          <button className={style.btn} onClick={() => onClose(id)}>X</button>
        </div>
        <img src={image} alt='' />
      </div>

      <div className={style.wrapperText}>
      <div className={style.name}>
        <Link to={`/detail/${id}`} style={{textDecoration: "none", color: "inherit"}}>
        <h1>{name}</h1>
        </Link>

      </div>
          <h2>Specie:{species} </h2>
          <h2>Status:{status} </h2>
          <h2>Gender:{gender} </h2>
          <h2>{origin.name} </h2>
          </div>
    </div>
  );
};

export default Card;
