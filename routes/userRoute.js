const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/user", (req, res) => {
    res.send("all users")
})


module.exports = router;