const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) return res.json({error: true, msg: 'Token not provided'});
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified.id;
    next();
  } catch (err) {
    res.json({error: true, err: err})
  }
}

module.exports = verifyToken;