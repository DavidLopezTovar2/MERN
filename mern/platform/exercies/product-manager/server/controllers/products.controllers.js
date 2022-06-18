const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json({ products }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to bring the products' }));
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body.product)
        .then(newProduct => res.json({ newProduct }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the product' }));
}

module.exports.getProductById = (req,res) => {
    console.log('BAAAAACKKK -------- ');
    console.log(req.params.id);
    Product.findById(req.params.id)
        .then(product => res.json({ product }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups could not bring the product' }));
}