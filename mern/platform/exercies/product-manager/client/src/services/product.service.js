const axios = require('axios');

export const createProduct = (product) => axios.post('http://localhost:8080/api/products',{
    product
});

export const getProducts = () => axios.get('http://localhost:8080/api/products');

export const getProductById = (id) => axios.get(`http://localhost:8080/api/products/${id}`);

export const updateProductById = (id,product) => axios.put(`http://localhost:8080/api/products/edit/${id}`,{
    product
});

export const deleteProduct = (id) => axios.delete(`http://localhost:8080/api/products/delete/${id}`);