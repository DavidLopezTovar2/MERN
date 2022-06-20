const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/products.controllers');

module.exports = (app) => {
    app.get('/api/products', getAllProducts);
    app.post('/api/products', createProduct);
    app.get('/api/products/:id', getProductById);
    app.put('/api/products/edit/:id',updateProduct);
    app.delete('/api/products/delete/:id',deleteProduct);
}