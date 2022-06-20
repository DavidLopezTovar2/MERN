const {
    getAllPets,
    createPet,
    getPetById,
    updatePet,
    deletePet
} = require('../controllers/pets.controllers');

module.exports = (app) => {
    app.get('/api/pets', getAllPets);
    app.post('/api/pets', createPet);
    app.get('/api/pets/:id', getPetById);
    app.put('/api/pets/update/:id',updatePet);
    app.delete('/api/pets/delete/:id',deletePet);
}