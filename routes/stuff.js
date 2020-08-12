const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff');

// POST
router.post('/', stuffController.createThing);

// GET
router.get('/', stuffController.getAllThing);

router.get('/:id', stuffController.getOneThing);

// PUT
router.put('/:id', stuffController.modifyThing);

// DELETE
router.delete('/:id', stuffController.deleteThing);

module.exports = router;
