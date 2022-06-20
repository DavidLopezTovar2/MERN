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
    Product.findById(req.params.id)
        .then(product => res.json({ product }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups could not bring the product' }));
}

module.exports.updateProduct = (req, res) => {
    console.log(req.body);
    Product.findByIdAndUpdate(req.params.id, req.body.product, { new: true })
        .then(updateProduct => res.json({ updateProduct }))
        .catch(err => res.status(500).json({ msg: 'Ups havent been able to update the product', error: err }))
}

module.exports.deleteProduct = (req, res) => {
    console.log(req.params.id);
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups we havent been able to delete the product', error: err }));
}