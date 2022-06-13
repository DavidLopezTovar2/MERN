const {Schema, model} = require('mongoose');

const JokeSchema = new Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});

const Joke = model('Joke', JokeSchema);

module.exports = Joke;