// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'your_secret_key'; 

  const jwt = require("jsonwebtoken")
  const SECRET_KEY = "mynameisajayshakyaIamFrommyownw"
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token is not valid' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
