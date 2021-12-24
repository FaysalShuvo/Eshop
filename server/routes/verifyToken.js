const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, data) => {
      if (err) res.status(403).json("Token Is Not Valid");

      req.user = data;
      next();
    });
  } else {
    return res.status(401).json({
      message: "you are not authenticated!",
    });
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "you are not allowed to do that!" });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "you are not Admin!" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
};
