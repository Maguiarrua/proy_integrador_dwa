const express = require ("express");
const morgan = require("morgan");
const cors= require("cors");
const router = require("./routes");


const server = express();


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));


server.use(router);


server.get("/", (req, res) => {
res.status(200).json({
    id:1,
    name:"magdalena arrúa",
    gender:"female",
    species:"human"
});
});

module.exports = server;