const {
    getAllProducts,
    createProduct,
    getProductById
} = require('../controllers/products.controllers');

module.exports = (app) => {
    app.get('/api/products', getAllProducts);
    app.post('/api/products', createProduct);
    app.get('/api/products/:id', getProductById);
}