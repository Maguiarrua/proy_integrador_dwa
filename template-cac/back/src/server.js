const express = require ("express");
const morgan = require("morgan");
const router = require("./routes");

server.use(morgan("dev"));
//server.use((req,res,next) =>{
//console.log(req);
//next();
//});
server.use(router);


server.get("/", (req, res) => {
res.status(200).json({
    id:1,
    name:"magdalena arrúa",
    gender:"female",
    species:"human"
})
});

module.exports = server;