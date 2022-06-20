const axios = require('axios');

export const createPet = (pet) => axios.post('http://localhost:8080/api/pets',{
    pet
});

export const getPets = () => axios.get('http://localhost:8080/api/pets');

export const getPetById = (id) => axios.get(`http://localhost:8080/api/pets/${id}`);

export const deletePet = (id) => axios.delete(`http://localhost:8080/api/pets/delete/${id}`);

export const updatePet = (id,pet) => axios.put(`http://localhost:8080/api/pets/update/${id}`,{
    pet
});