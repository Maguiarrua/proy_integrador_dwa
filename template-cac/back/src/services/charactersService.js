const axios = require ("axios");

const  findCharacterById = async (id) => {
const fetchData = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
); 
const character = fetchData.data;

return character;
};
 


module.exports = {
    findCharacterById,
};
