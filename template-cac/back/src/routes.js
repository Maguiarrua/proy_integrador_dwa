
const { Router } = require("express");
const getCharacterById = require("./controllers/getCharacterById");

const router = Router();
router.get("/character/:id", getCharacterById);

module.exports = router;