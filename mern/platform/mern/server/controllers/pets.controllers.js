const Pet = require('../models/pets.model');

module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(pets => res.json({ pets }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to bring the pets' }));
};

module.exports.createPet = (req, res) => {
    console.log(req.body.pet);
    Pet.create(req.body.pet)
        .then(newPet => res.json({ newPet }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the pet' }));
}

module.exports.getPetById = (req,res) => {
    Pet.findById(req.params.id)
        .then(pet => res.json({ pet }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups could not bring the pet' }));
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body.pet, { new: true })
        .then(updatePet => res.json({ updatePet }))
        .catch(err => res.status(500).json({ msg: 'Ups havent been able to update the pet', error: err }))
}

module.exports.deletePet = (req, res) => {
    console.log(req.params.id);
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups we havent been able to delete the pet', error: err }));
}