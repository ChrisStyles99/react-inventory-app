const express = require('express');

const router = express.Router();

const {register, login, helloWorld} = require('../controllers/userController');

router.post('/register', register);

router.post('/login', login);

router.get('/', helloWorld);

module.exports = router;