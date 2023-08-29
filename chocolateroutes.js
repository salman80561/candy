const express = require('express');
const router = express.Router();
const chocolateController = require('../controllers/chocolateController');

// GET all chocolates
router.get('/', chocolateController.getAllChocolates);

// POST a new chocolate
router.post('/', chocolateController.createChocolate);

module.exports = router;
