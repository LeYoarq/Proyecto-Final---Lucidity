const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const SECRET = require('../config/salt').salt; // get our config file

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.header('x-access-token');
  if (!token)
    return res.status(403).send({ auth: false, message: 'Bad credentials' });

  // verifies secret and checks exp
  jwt.verify(token, SECRET, function(err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // si todo sale bien (el token es válido), guardar el id en el request para su uso en otras rutas.
    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

function buildToken (key) {
  // create a token
  var token = jwt.sign({ id: key }, SECRET, {
    expiresIn: 999999999999999 
  });
  return token;
}

function verifyParam(req, res, next) {

    // check header or url parameters or post parameters for token
    //var token = req.params.token;
    const token = req.headers['x-access-token'];
    if (!token)
      return res.status(403).send({ auth: false, message: 'Bad credentials' });
 
    // verifies secret and checks exp
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err)
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      next();
    });
  };

module.exports = {
  verifyToken,
  buildToken,
  verifyParam
};