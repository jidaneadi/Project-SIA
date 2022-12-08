const express = require('express');
const router = express.Router();
const adminHandler = require('./handler/admin');

router.post('/register', adminHandler.register);
router.get('/', adminHandler.allData);
router.get('/:id', adminHandler.dataById);
router.put('/update/:id', adminHandler.updateData);

module.exports = router;