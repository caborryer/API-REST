const Clients = require("../../models/clientModels");

let list = (req, res) => {
  Clients.find({}).exec((err, data) => {
    if (err)
      return res.json({
        ok: false,
        err
      });

    res.json(data);
  });
};

module.exports = { list };
