const express = require('express');
const router = express.Router();

const AboutController = require('../controllers/aboutController');

//routes
router.get('/about', AboutController.get);
router.post('/about', AboutController.update);

module.exports = router;