const data =require("../utils/data");



const getCharacterById = (req,res) =>{
    const {id} = req.params;
    const character = data.find(char=>char.id == id);
    //res.status(200).json(character);
    if(character) return res.status(200).json(character);
    else 
    return res.status(404).json({
        error: `El personaje con ID ${id} no existe en nuestra BDD`,
    });
};
module.exports = getCharacterById;