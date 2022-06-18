const axios = require('axios');

export const createProduct = (product) => axios.post('http://localhost:8080/api/products',{
    product
});