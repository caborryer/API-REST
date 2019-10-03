const Users = require("../../models/userModels");
const response = require("../../utils/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let list = (req, res) => {
  Users.find({}).exec((err, all) => {
    return res.json({
      all
    });
  });
};

let create = (req, res) => {
  let user = new Users({
    name: req.body.name,
    id: req.body.id,
    cellphone: req.body.cellphone,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  });

  user.save((err, userNew) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err
      });
    }

    return res.status(201).json({
      ok: true,
      user: userNew
    });
  });
};

let search = (req, res) => {
  Users.findById(req.params.id).exec((err, dates) => {
    return res.json({
      dates
    });
  });
};

let modify = (req, res) => {
  let user = {
    name: req.body.name,
    id: req.body.id,
    cellphone: req.body.cellphone,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  Users.findByIdAndUpdate(
    req.params.id,
    user,
    { new: true },
    (err, userNew) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err
        });
      }

      return res.json({
        ok: true,
        userNew
      });
    }
  );
};

let login = (req, res) => {
  Users.findOne({ user: req.body.user }, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!user) {
      return res.status(404).json({
        ok: false,
        men: "User or invalid password"
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(404).json({
        ok: false,
        men: "User or invalid password"
      });
    }

    let token = jwt.sign(
      {
        data: user
      },
      process.env.SECRET,
      { expiresIn: "4h" }
    );

    res.json({
      ok: true,
      user,
      token
    });
  });
};

// let destroy = (req, res) => {
//   Users.findByIdAndUpdate(
//     req.params.id,
//     { status: req.params.status },
//     { new: true },
//     (err, userNew) => {
//       if (err) {
//         return res.status(401).json({
//           ok: false,
//           err
//         });
//       }

//       return res.json({
//         ok: true,
//         userNew
//       });
//     }
//   );
// };
module.exports = { create, list, search, modify, login };
