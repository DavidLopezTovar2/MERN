const { Schema, model } = require('mongoose');

const petSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Should have name'],
        unique: true,
        minlength: [3, 'Should have at least 3 characters'],
    },
    type: {
        type: String,
        required: [true, 'Should have a type'],
        minlength: [3, 'Should have at least 3 character'],
    },
    description: {
        type: String,
        required: [true, 'Should have a description'],
        minlength: [3, 'Should have at least 3 character'],
    },
    skills: {
        type: Array,
        maxlength: [3, 'Cannot have more than 3 skills']
    },
    likes: {
        type: Number
    }
})

const Pet = model('Pet', petSchema);

module.exports = Pet;