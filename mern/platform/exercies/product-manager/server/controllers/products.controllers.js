const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json({ products }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to bring the products' }));
};

module.exports.createProduct = (req, res) => {
    console.log("🚀 ~ file: dojos.controllers.js ~ line 11 ~ req.body", req.body.dojo)
    Product.create(req.body.product)
        .then(newProduct => res.json({ newProduct }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the product' }));
}