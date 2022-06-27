const Joboffer = require('../models/joboffer.model');


module.exports.createJoboffer = (req, res) => {
    console.log(req.body.user);
    Joboffer.create(req.body.joboffer)
        .then(newJoboffer => res.json({ newJoboffer }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the offer' }));
}

module.exports.getJoboffers = (req, res) => {
    Joboffer.find()
        .then(joboffers => res.json({ joboffers }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to bring the offers' }));
};
