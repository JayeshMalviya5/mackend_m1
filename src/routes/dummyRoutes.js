const express = require('express');
const router = express.Router();
const { getDummyData } = require('../controllers/dummyController');

// GET /api/dummy
router.get('/', getDummyData);

module.exports = router;