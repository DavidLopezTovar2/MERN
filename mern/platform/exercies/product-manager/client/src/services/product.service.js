const axios = require('axios');

export const createProduct = (product) => axios.post('http://localhost:8080/api/products',{
    product
});

export const getProducts = () => axios.get('http://localhost:8080/api/products');

export const getProductById = (id) => axios.get(`http://localhost:8080/api/products/${id}`);