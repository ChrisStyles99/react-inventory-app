const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) return res.status(401).json({error: true, msg: 'Token not provided'});
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(400).json({error: true, err: err})
  }
}

module.exports = verifyToken;