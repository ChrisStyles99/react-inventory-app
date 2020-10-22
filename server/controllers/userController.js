const userController = {};
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userController.register = async(req, res) => {
  const {name, email, password} = req.body;

  const emailExists = await User.findOne({email: email});

  if(emailExists) return res.status(400).json({error: true, msg: 'Email already exists'});

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword
  });

  try {
    const newUser = await user.save();
    res.status(201).json({error: null, user: newUser});
  } catch (err) {
    res.json(500).json({error: true, err: err});
  }
}

userController.login = async(req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email: email});

  if(!user) return res.status(404).json({error: true, msg: 'Email does not exists'});

  const validPassword = await bcrypt.compare(password, user.password);
  if(!validPassword) return res.status(400).json({error: true, msg: 'Invalid password'});

  const token = jwt.sign({id: user._id},process.env.TOKEN_SECRET, {expiresIn: 60 * 60 * 24});

  res.header('auth-token', token).json({error: null, token: token});
}

userController.helloWorld = (req, res) => {
  res.send('Hello world');
}

module.exports = userController;