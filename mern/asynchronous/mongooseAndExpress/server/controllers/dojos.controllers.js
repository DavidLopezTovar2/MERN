// esta mal const {translateAliases} = require('../models/dojo.models');
const Dojo = require('../models/dojo.models');

module.exports.getAllDojos = (req, res) => {
    Dojo.find()
        .then(dojos => res.json({ dojos }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups, no hemos podido traer las sucursales' }));
}

module.exports.createDojo = (req, res) => {
    Dojo.create(req.body)
        .then(newDojo => res.json({ newDojo }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups, no hemos podido traer las sucursales' }));
}

module.exports.addIntructorsToDojo = (req, res) => {
    Dojo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(dojo => {
            res.json({ dojo })
        })
        .catch(err => res.status(404).json({ error: err, msg: 'Ups, no hemos podido traer las sucursales' }))
}

module.exports.getStudents = (req, res) => {
    Dojo.aggregate([
        {$group:{_id:null,sumaestudiantes:{$sum:"$qtyStudents"}}}
    ])
        .then(sumStudents => res.json({sumStudents}))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups, no hemos podido traer las sucursales' }))
}



