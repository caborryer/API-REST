const Sales = require("../../models/salesModels");
const Products = require("../../models/productsModels");

let create = async (req, res) => {
  let body = req.body;

  qualityValidation(body.productDetails, response => {
    if (response == false)
      return res.json({
        ok: false,
        men: "There is no products to add"
      });

    let sale = new Sales({
      Total: body.total,
      client: body.client,
      products: response
    });

    sale.save((err, saleNew) => {
      if (err)
        return res.json({
          ok: false,
          err
        });

      res.json({
        ok: true,
        saleNew
      });
    });
  });
};

let qualityValidation = async (products, callback) => {
  let products_id = [];
  products.forEach(element => {
    products_id.push(element.producto_id);
  });

  let response = [];

  Products.find({})
    .where("_id")
    .in(products_id)
    .exec(async (err, data) => {
      for (let i = 0; i < data.length; i++) {
        let quantity = products.find(p => p.product_id == data[i]._id).quantity;

        if (quantity <= data[i].quantity) {
          new_quantity = data[i].quantity - quantity;

          let modifico = await Products.findByIdAndUpdate(data[i]._id, {
            quantity: new_quantity
          });

          if (modifidy != false) {
            response.push({
              products: data[i]._id,
              quantity: quantity
            });
          }
        }
      }

      callback(response.length == 0 ? false : response);
    });
};

let list = (req, res) => {
  Sales.find({})
    .populate("client")
    .populate("products.products")
    .exec((err, data) => {
      res.json(data);
    });
};

module.exports = {
  create,
  list
};
