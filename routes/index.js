const express = require('express');
const { calculateLove } = require('../controllers')

const router = express.Router();


router.post('/calculate-love', calculateLove);

module.exports = router;
