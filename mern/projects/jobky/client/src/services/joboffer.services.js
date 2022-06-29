const axios = require('axios');

export const createJoboffer = (joboffer) => axios.post('http://localhost:8080/api/joboffers/create',{
    joboffer
});

export const getJoboffers = () => axios.get('http://localhost:8080/api/joboffers')
