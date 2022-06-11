const axios = require ('axios');

export const getApiParameters = async (resource,id) => {
    const res = await axios.get(`https://swapi.dev/api/${resource}/${id}`)
    //console.log(res.data);
    return res.data;
}