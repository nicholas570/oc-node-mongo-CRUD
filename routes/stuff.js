const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');

// POST
router.post('/', auth, stuffController.createThing);

// GET
router.get('/', auth, stuffController.getAllThing);

router.get('/:id', auth, stuffController.getOneThing);

// PUT
router.put('/:id', auth, stuffController.modifyThing);

// DELETE
router.delete('/:id', auth, stuffController.deleteThing);

module.exports = router;
