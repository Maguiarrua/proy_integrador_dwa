const server = require ("./src/server");
const router = require("./src/routes");
const {conn} = require("./src/DB_connection");

conn.sync({
    force:true
}).then(()=>{

    server.listen(3000, () =>{
        console.log("Server listening on port 3000");
});
});