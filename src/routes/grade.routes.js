const express = require('express')
const router = express.Router()
const gradeController = require('../controllers/grade.controller');

// Retrieve all grade
router.get('/', gradeController.findAll);

module.exports = router