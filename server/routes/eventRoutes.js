// routes/eventRoutes.js
const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, createEvent);
router.get('/', authenticateToken, getEvents);
router.put('/:id', authenticateToken, updateEvent);
router.delete('/:id', authenticateToken, deleteEvent);

module.exports = router;
