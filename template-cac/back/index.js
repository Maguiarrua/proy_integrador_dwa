const server = require ("./src/server");
const router = require("./src/routes");
server.listen(3000, () =>{
    console.log("Server listening on port 3000");

});