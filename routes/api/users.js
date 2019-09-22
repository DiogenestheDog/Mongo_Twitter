const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/test', (req, res) => res.json({ msg: "wer this is the users route man"}));

module.exports = router;