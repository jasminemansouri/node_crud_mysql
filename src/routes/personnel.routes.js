const express = require('express')
const router = express.Router()
const personnelController = require('../controllers/personnel.controller');

// Retrieve all personnels
router.get('/', personnelController.findAll);

// Create a new personnel
router.post('/', personnelController.create);

// // Retrieve a single personnel with id
router.get('/:id', personnelController.findById);

// // Update a personnel with id
router.put('/:id', personnelController.update);

// // Delete a personnel with id
router.delete('/:id', personnelController.delete);


module.exports = router