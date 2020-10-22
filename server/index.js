const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT || 5000;

const verifyToken = require('./routes/validateToken');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  app.listen(port);
  console.log('Connected to port' + port);
  console.log('Connected to DB');
}).catch(err => {
  console.log(err);
});

// Routes
app.use('/items', verifyToken, require('./routes/items'));
app.use('/users', require('./routes/users'));