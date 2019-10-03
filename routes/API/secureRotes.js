const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  let token = req.get("Authorization");

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        men: "Invalid token "
      });
    }

    req.user = user.data;

    next();
  });
};

module.exports = { auth };
