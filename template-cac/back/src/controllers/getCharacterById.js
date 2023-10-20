const { findCharacterById } = require ("../services/charactersService")


const getCharacterById =  async (req,res) =>{
    const {id} = req.params;
    try{
        const character = await findCharacterById(id);
        
        return res.status(200).json(character);
    }
    catch(error){
        return res.status(404).json({
            error: error.message,
        });
    }
  
};
module.exports = getCharacterById;