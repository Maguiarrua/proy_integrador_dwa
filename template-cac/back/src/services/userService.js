const EMAIL = "magdalenarrua@gmail.com";
const PASSWORD = "magdalena123";


const checkUser = async (email, password) =>{
    if(email == EMAIL && password ==PASSWORD) return true;
    else throw Error ("Login invalue");

};
module.exports = {
    checkUser,
};
