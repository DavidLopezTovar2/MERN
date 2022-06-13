const Joke = require('../models/jokes.model');

module.exports.getJokes = (req,res) => {
    Joke.find()
        .then(jokes => res.json({ jokes: jokes }))
        .catch(err => res.status(500).json({error: err, msg: 'Cannot bring jokes'}));
}

module.exports.getJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.status(500).json({message: 'Something went wrong', error: err}));
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.status(500).json({message: 'Something went wrong', error: err}));
}

module.exports.updateExistingJoke = (req,res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {new: true})
     .then(joke => res.json({ joke: joke}))
     .catch(err => res.status(500).json({message: 'Something went wrong', error: err}));
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({result: result}))
        .catch(err => res.status(500).json({message: 'Something went wrong', error: err}));
}

