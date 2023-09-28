// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres

const Card = (props) => {
  const { name, species, status, gender, origin,  image, onClose } = props
  return (
    <div>
      <button onClick={onClose}>X</button>
          <h2>{name} </h2>
          <h2>{species} </h2>
          <h2>{status} </h2>
          <h2>{gender} </h2>
          <h2>{origin} </h2>
          <img src={image} alt='' /> 
    </div>
  );
};

export default Card;
