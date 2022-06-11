const axios = require('axios');

export const createDojo = async(dojo) => await axios.post('http://localhost:8080/api/dojos',{
    dojo
});