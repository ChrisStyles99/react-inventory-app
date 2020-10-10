const express = require('express');

const router = express.Router();

const {getItems, newItem, getItem, updateItem, deleteItem} = require('../controllers/itemsController');

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/new-item', newItem);

router.put('/edit-item/:id', updateItem);

router.delete('/delete-item/:id', deleteItem);

module.exports = router;