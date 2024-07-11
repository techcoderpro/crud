const express = require('express');
const router = express.Router();
const { profileController } = require('../controllers/controller');

router.get('/', profileController);

module.exports = router;
