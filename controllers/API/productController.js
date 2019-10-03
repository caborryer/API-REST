const Products = require("../../models/productsModels");

let list = (req, res) => {
  Products.find({}).exec((err, data) => {
    return res.json({
      data
    });
  });
};

let create = (req, res) => {
  let product = new Products({
    name: req.body.name,
    id: req.body.id,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    stock: req.body.quantity
  });

  product.save((err, productNew) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err
      });
    }

    return res.status(201).json({
      ok: true,
      product: productNew
    });
  });
};

let search = (req, res) => {
  Products.findById(req.params.id).exec((err, dates) => {
    return res.json({
      dates
    });
  });
};

let modify = (req, res) => {
  let product = {
    name: req.body.name,
    id: req.body.id,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    stock: req.body.quantity
  };

  Products.findByIdAndUpdate(
    req.params.id,
    product,
    { new: true },
    (err, productNew) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err
        });
      }

      return res.json({
        ok: true,
        productNew
      });
    }
  );
};

module.exports = { list, create, search, modify };
