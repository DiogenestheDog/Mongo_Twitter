const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get("/test", (req, res) => res.json({ msg: "This is the tweets route yo"}));

module.exports = router;