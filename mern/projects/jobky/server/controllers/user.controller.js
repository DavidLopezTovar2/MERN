
const User = require('../models/user.model');


module.exports.createUser = (req, res) => {
    console.log(req.body.user);
    User.create(req.body.user)
        .then(newUser => res.json({ newUser }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the user' }));
}

module.exports.getUsers = (req, res) => {
    User.find()
        .then(users => res.json({ users }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to bring the users' }))
}

module.exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json({ user }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups havent been able to bring the user' }));
}

module.exports.deleteAll = async (req, res) => {
    await User.deleteMany()
        .then(deleted => res.json({ deleted }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to create the user' }));
}

module.exports.findUserWithExperience = (req, res) => {
    const exp = req.params.experience;
    console.log(exp);
    User.aggregate().match({ experience: { $in: [exp] } })
        .then(users => res.json({ users }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups havent been able to bring the users with that experience' }));
}

module.exports.deleteUser= (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido contratar el usuario', error: err }));
}