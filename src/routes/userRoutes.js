const express = require("express");
const { createUser, updateUser, getUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/", getUsers);

module.exports = router;
