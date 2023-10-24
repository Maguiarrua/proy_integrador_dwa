
const { Router } = require("express");
const getCharacterById = require("./controllers/getCharacterById");
const loginController = require("./controllers/loginController");


const router = Router();
router.get("/character/:id", getCharacterById);

router.post("/login", loginController);

module.exports = router;