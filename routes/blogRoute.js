const express = require('express');
const router = express.Router();
const{blogController }= require('../controllers/controller');

  
router.get('/',blogController);

module.exports = router; 