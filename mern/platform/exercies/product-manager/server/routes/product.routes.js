const {
    getAllProducts,
    createProduct
} = require('../controllers/products.controllers');

module.exports = (app) => {
    app.get('/api/products', getAllProducts);
    app.post('/api/products', createProduct);
}